import { NgModule } from '@angular/core';
import { HikingStatusBarComponent } from './hiking-status-bar.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [
        HikingStatusBarComponent
    ],
    imports: [
        IonicModule,
        CommonModule,
        RouterModule
    ],
    exports: [
        HikingStatusBarComponent
    ]
})
export  class HikingStatusBarModule {}
