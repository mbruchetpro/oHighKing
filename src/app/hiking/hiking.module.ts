import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HikingPage } from './hiking.page';
import {ListStepModule} from '../list-step/list-step.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { LoginService } from '../services/login.service';

const routes: Routes = [
  {
    path: '',
    component: HikingPage
  }
];

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      RouterModule.forChild(routes),
      ListStepModule,
      HttpClientModule,
      HttpModule,
    ],
    providers: [
      LoginService
    ],
    declarations: [HikingPage]
})
export class HikingPageModule {}
