import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { HikingStatusBarModule } from '../hiking-status-bar/hiking-status-bar.module';
import { HomePage } from './home.page';

import { LoginService } from '../services/login.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { TimerModule } from '../timer/timer.module';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    HttpModule,
    HikingStatusBarModule,
    TimerModule,
  ],
  providers: [
    LoginService
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
