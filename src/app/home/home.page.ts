import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { IUser } from '../models/user.definitions';
import { Router } from '@angular/router';
import { HikingService } from '../services/hiking/hiking.service';
import { IHiking } from '../models/hiking.definitions';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  hikingList: IHiking[];
  user: IUser;

  constructor(private loginService: LoginService, private hikingService: HikingService, private router: Router) {}

  ngOnInit() {
    this.loginService.checkUser().subscribe((result: IUser) => this.user = result);
    if (!this.user) {
      this.router.navigate(['/login']);
    }
    this.hikingService.getHikings().subscribe((data: any) => {
      this.hikingList = data.hikings;
    });
  }
}
