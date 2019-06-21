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
  @Input() currentPosition: [number, number] | undefined;

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
    // @ts-ignore
    L.Routing.control({
      waypoints: this.hiking.steps.map(step => [step.latitude, step.longitude]),
      show: false
    }).addTo(map);
    console.log(this.currentPosition);
    if (this.currentPosition !== undefined) {
     // @ts-ignore
     L.marker(this.currentPosition).addTo(map);
    }
  }
}


// map.locate({setView: true, watch: true, maxZoom: 8});
