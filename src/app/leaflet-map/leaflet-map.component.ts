import {Component, Input, OnInit} from '@angular/core';
import {IHiking} from '../home/home.definition';

@Component({
  selector: 'app-leaflet-map',
  templateUrl: './leaflet-map.component.html',
  styleUrls: ['./leaflet-map.component.scss'],
})
export class LeafletMapComponent implements OnInit {

  @Input() pageName: string;
  @Input() hiking: IHiking;

  constructor() { }

  ngOnInit() {
    setTimeout(() => this.initLeafletMap(), 1000);
  }

  initLeafletMap() {
    // @ts-ignore
    const map = L.map('map' + this.pageName).setView([this.hiking.steps[0].latitude, this.hiking.steps[0].longitude], 10);
    // @ts-ignore
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const hikingStep = this.hiking.steps.map(step => [step.latitude, step.longitude]);

    // @ts-ignore
    const controls = L.Routing.control({
      waypoints: hikingStep,
      show: false
    }).addTo(map);
    // @ts-ignore
    // this.hiking.steps.map((step) => L.marker([step.latitude, step.longitude]).addTo(mymap));
  }

}
