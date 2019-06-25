import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { HikingService } from '../services/hiking.service';
import {IHiking} from '../home/home.definition';
import { LoginService } from '../services/login.service';
import { IUser } from '../models/user.definitions';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  hiking: IHiking;
  user: IUser;
  status: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private hikingService: HikingService,
    private loginService: LoginService,
  ) {}

  ngOnInit() {    
    this.loginService.checkUser().subscribe((result: IUser) => this.user = result);

    if (!this.user) {
      this.router.navigate(['/login']);
    }

    this.hikingService.statusHiking.subscribe( (sub) => {
      this.status = sub;
      console.log("detail sub --> ", sub);
    });
  
    this.route.paramMap.pipe(
      switchMap((params: ParamMap ) => this.hikingService.getHiking(params.get('id')))
    ).subscribe((hiking) => this.hiking = hiking);
  }

  setHikingInProgess() {
    this.hikingService.setHikingInProgess(this.hiking);
  }
  
  finishHiking() {
    this.hikingService.finishHiking();
  }

  getHikingInProgress() : IHiking {
    return this.hikingService.getHikingInProgress();
  }
  
}
