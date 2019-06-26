import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerComponent } from './timer.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

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
  ],
  exports: [
    TimerComponent,
  ],
})
export class TimerModule { }
