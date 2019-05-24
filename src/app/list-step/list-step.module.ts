import { NgModule } from '@angular/core';
import { ListStepComponent } from './list-step.component';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';

@NgModule({
    declarations: [
        ListStepComponent
    ],
    imports: [
        IonicModule,
        CommonModule
    ],
    exports: [
        ListStepComponent
    ]
})
export class ListStepModule {}
