import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { DetailPage } from './detail.page';
import {ListStepModule} from '../list-step/list-step.module';
import {HikingStatusBarModule} from '../hiking-status-bar/hiking-status-bar.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { LoginService } from '../services/login.service';
import {LeafletMapModule} from '../leaflet-map/leaflet-map.module';
import { TimerModule } from '../timer/timer.module';

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
        HttpClientModule,
        HttpModule,
        HikingStatusBarModule,
        LeafletMapModule,
        TimerModule,
    ],
    providers: [
      LoginService
    ],
  declarations: [DetailPage]
})
export class DetailPageModule {}
