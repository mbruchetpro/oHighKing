import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login.page';
import { LoginService } from '../services/login.service';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
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
  ],
  providers: [
    LoginService
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
