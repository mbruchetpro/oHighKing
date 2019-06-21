import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import { HikingService } from '../services/hiking.service';
import {IHiking} from '../home/home.definition';
import { IUser } from '../models/user.definitions';
import { LoginService } from '../services/login.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-hiking',
  templateUrl: './hiking.page.html',
  styleUrls: ['./hiking.page.scss'],
})
export class HikingPage implements OnInit {

  hiking: IHiking;
  user: IUser;

  currentPosition: [number, number];
  chargement: boolean;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private hikingService: HikingService,
      private loginService: LoginService,
      private geolocation: Geolocation
  ) {
    this.chargement = true;
  }

  ngOnInit() {
    this.loginService.checkUser().subscribe((result: IUser) => this.user = result);

    if (!this.user) {
      this.router.navigate(['/login']);
    }

    const watch = this.geolocation.watchPosition();
    watch.subscribe((location) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
      this.currentPosition = [location.coords.latitude, location.coords.longitude];
      setTimeout(() => this.chargement = false, 1000);
    });

    this.route.paramMap.pipe(
        switchMap((params: ParamMap ) => this.hikingService.getHiking(params.get('id')))
    ).subscribe((hiking) => this.hiking = hiking);
  }

  getCurrentPosition() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.currentPosition = [resp.coords.latitude, resp.coords.longitude];
    }).catch((error) => {
      console.log('Error getting location', error);
    }).finally(() => this.chargement = false);
  }

  finishHiking() {
    localStorage.removeItem('ohighking_hiking-in-progress');
  }

}
