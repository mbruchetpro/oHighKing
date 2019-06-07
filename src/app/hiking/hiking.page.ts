import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import { HikingService } from '../services/hiking.service';
import {IHiking} from '../home/home.definition';
import { IUser } from '../models/user.definitions';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-hiking',
  templateUrl: './hiking.page.html',
  styleUrls: ['./hiking.page.scss'],
})
export class HikingPage implements OnInit {

  hiking: IHiking;
  user: IUser;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private hikingService: HikingService,
      private loginService: LoginService,
  ) { }

  ngOnInit() {
    this.loginService.checkUser().subscribe((result: IUser) => this.user = result);

    if (!this.user) {
      this.router.navigate(["/login"]);
    }
    
    this.route.paramMap.pipe(
        switchMap((params: ParamMap ) => this.hikingService.getHiking(params.get('id')))
    ).subscribe((hiking) => this.hiking = hiking);
  }

  finishHiking() {
    localStorage.removeItem('ohighking_hiking-in-progress');
  }

}
