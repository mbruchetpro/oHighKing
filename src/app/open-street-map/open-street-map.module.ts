import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import {OpenStreetMapComponent} from './open-street-map.component';

@NgModule({
    declarations: [
        OpenStreetMapComponent
    ],
    imports: [
        IonicModule,
        CommonModule
    ],
    exports: [
        OpenStreetMapComponent
    ]
})
export class OpenStreetMapModule {}
