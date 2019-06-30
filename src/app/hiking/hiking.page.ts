import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import { HikingService } from '../services/hiking/hiking.service';
import { IUser } from '../models/user.definitions';
import { LoginService } from '../services/login.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {IHiking} from '../models/hiking.definitions';
import {IGeolocation} from '../models/geolocation.definitions';
import { TimerService } from '../services/timer/timer.service';

@Component({
  selector: 'app-hiking',
  templateUrl: './hiking.page.html',
  styleUrls: ['./hiking.page.scss'],
})
export class HikingPage implements OnInit {

  hiking: IHiking;
  user: IUser;

  currentPosition: IGeolocation;
  chargement: boolean;

  hours: number;
  minutes: number;
  seconds: number;

  status: boolean;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private hikingService: HikingService,
      private loginService: LoginService,
      private geolocation: Geolocation,
      private timerService: TimerService
  ) {
    this.chargement = true;
    this.currentPosition = {
      latitude: 0,
      longitude: 0
    };
  }

  ngOnInit() {
    this.loginService.checkUser().subscribe((result: IUser) => this.user = result);

    if (!this.user) {
      this.router.navigate(['/login']);
    }

    const watch = this.geolocation.watchPosition();
    watch.subscribe((location) => {
      this.currentPosition.latitude = location.coords.latitude;
      this.currentPosition.longitude = location.coords.longitude;
      this.chargement = false;
    });
    let paramId;
    this.route.paramMap.pipe(
        switchMap((params: ParamMap ) => {
            paramId = params.get('id');
            return this.hikingService.getHiking(params.get('id'));
        })
      )
    .subscribe((hiking) => this.hiking = hiking);
    
    this.timerService.hours.subscribe(h => this.hours = h);
    this.timerService.minutes.subscribe(m => this.minutes = m);
    this.timerService.seconds.subscribe(s => this.seconds = s);

    if (this.allStepsValid()) { this.finishHiking(); }

    this.route.paramMap.pipe(
        switchMap((params: ParamMap ) => this.hikingService.getHiking(params.get('id')))
    ).subscribe((hiking) => this.hiking = hiking);
    this.hikingService.statusHiking.subscribe( (sub) => this.status = sub);

  }

  finishHiking() {
    this.hikingService.finishHiking();
  }

  allStepsValid() {
    let isFinish = false;
    this.hiking.steps.map((step) => isFinish = step.validate);
    return isFinish;
  }

}
