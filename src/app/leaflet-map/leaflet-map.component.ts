import { Component, Input, OnInit } from '@angular/core';
import { IHiking } from '../models/hiking.definitions';
import { IGeolocation } from '../models/geolocation.definitions';
import { IStep } from '../models/step.definitions';

@Component({
  selector: 'app-leaflet-map',
  templateUrl: './leaflet-map.component.html',
  styleUrls: ['./leaflet-map.component.scss'],
})
export class LeafletMapComponent implements OnInit {

  @Input() pageName: string;
  @Input() hiking: IHiking;
  @Input() currentPosition: IGeolocation;

  distanceToNextStep: number;

  constructor() { }

  ngOnInit() {
    setTimeout(() => this.initLeafletMap(), 1000);
  }

  initLeafletMap() {
    // @ts-ignore
    const map = L.map('map' + this.pageName).setView(
        [this.hiking.steps[0].geolocation.latitude, this.hiking.steps[0].geolocation.longitude]
        , 10);
    // @ts-ignore
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // @ts-ignore
    L.Routing.control({
      waypoints: this.hiking.steps.map(step => [step.geolocation.latitude, step.geolocation.longitude]),
      show: false
    }).addTo(map);
    if (this.currentPosition !== undefined) {
      this.distanceToNextStep = this.calculerDistance(this.currentPosition, this.getNextStep().geolocation);
      // @ts-ignore
      L.marker([this.currentPosition.latitude, this.currentPosition.longitude]).addTo(map);
      if (this.distanceToNextStep <= 10) {
        this.validerNextStep();
      }
    }
  }

  getNextStep(): IStep {
    return this.hiking.steps.find(step => !step.validate);
  }

  validerNextStep() {
    this.getNextStep().validate = true;
  }

  convertDegreToRadian(degre: number): number {
    return Math.PI * degre / 180;
  }

  calculerDistance(posA: IGeolocation, posB: IGeolocation) /* Return float. Unit is the metter */ {
    let lat1 = this.convertDegreToRadian(posA.latitude);
    let lat2 = this.convertDegreToRadian(posB.latitude);
    let lon1 = this.convertDegreToRadian(posA.longitude);
    let lon2 = this.convertDegreToRadian(posB.longitude);

    if (lat1 < 0 || lat1 > 90 || lat2 < 0 || lat2 > 90) {
      throw new Error(('Error params. The params lat1 and lat2 must be 0< ? <90. Here lat1 = ' + lat1 + ' and lat2 = ' + lat2));
    }
    if (lon1 < -180 || lon1 > 180 || lon2 < -180 || lon2 > 180) {
      throw new Error(('Error params. The params lon1 and lon2 must be -180< ? <180. Here lon1 = ' + lon1 + ' and lon2 = ' + lon2));
    }

    const a = Math.PI / 180;
    lat1 = lat1 * a;
    lat2 = lat2 * a;
    lon1 = lon1 * a;
    lon2 = lon2 * a;

    const t1 = Math.sin(lat1) * Math.sin(lat2);
    const t2 = Math.cos(lat1) * Math.cos(lat2);
    const t3 = Math.cos(lon1 - lon2);
    const t4 = t2 * t3;
    const t5 = t1 + t4;
    const radDist = Math.atan(-t5 / Math.sqrt(-t5 * t5 + 1)) + 2 * Math.atan(1);

    return (radDist * 3437.74677 * 1.1508) * 1.6093470878864446 * 1000;
  }
}
