import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerComponent } from './timer.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { HikingService } from '../services/hiking.service';
import { TimerService } from '../services/timer/timer.service';

@NgModule({
  declarations: [
    TimerComponent,
  ],
  imports: [
    IonicModule,
    CommonModule,
    RouterModule,
  ],
  providers: [
    HikingService,
    TimerService
  ],
  exports: [
    TimerComponent,
  ],
})
export class TimerModule { }
