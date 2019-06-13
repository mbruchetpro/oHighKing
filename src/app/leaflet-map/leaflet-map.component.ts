import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leaflet-map',
  templateUrl: './leaflet-map.component.html',
  styleUrls: ['./leaflet-map.component.scss'],
})
export class LeafletMapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(() => this.initLeafletMap(), 1000);
  }

  initLeafletMap() {
    // @ts-ignore
    const mymap = L.map('mapid').setView([45.77, 3.08], 13);
    // @ts-ignore
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);
  }

}
