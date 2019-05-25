import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { DetailPage } from './detail.page';
import {ListStepModule} from '../list-step/list-step.module';
import {HikingStatusBarModule} from '../hiking-status-bar/hiking-status-bar.module';

const routes: Routes = [
  {
    path: '',
    component: DetailPage
  }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        ListStepModule,
        HikingStatusBarModule,
    ],
  declarations: [DetailPage]
})
export class DetailPageModule {}
