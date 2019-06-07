import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-open-street-map',
  templateUrl: './open-street-map.component.html',
  styleUrls: ['./open-street-map.component.scss'],
})
export class OpenStreetMapComponent implements OnInit {

  @Input() latitude: number = 18.5204;
  @Input() longitude: number = 18.5204;

  map: any;

  ol: any;

  constructor() { }

  ngOnInit() {
    this.map = new this.ol.Map({
      target: 'map',
      layers: [
        new this.ol.layer.Tile({
          source: new this.ol.source.OSM()
        })
      ],
      view: new this.ol.View({
        center: this.ol.proj.fromLonLat([73.8567, 18.5204]),
        zoom: 8
      })
    });
  }

}
