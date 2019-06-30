import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import { HikingService } from '../services/hiking.service';
import { IUser } from '../models/user.definitions';
import { LoginService } from '../services/login.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {IHiking} from '../models/hiking.definitions';
import {IGeolocation} from '../models/geolocation.definitions';

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

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private hikingService: HikingService,
      private loginService: LoginService,
      private geolocation: Geolocation
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

    this.route.paramMap.pipe(
        switchMap((params: ParamMap ) => this.hikingService.getHiking(params.get('id')))
    ).subscribe((hiking) => this.hiking = hiking);
  }

  finishHiking() {
    this.hikingService.finishHiking();
  }

}
