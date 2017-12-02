import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  lat: number = 45.5231;
  lng: number = -122.6765;

  markers = [
    {
      lat: 45,
      lng: -122
    },
    {
      lat: 45,
      lng: -122.3
    },
    {
      lat: 45,
      lng: -122.4
    },
    {
      lat: 45,
      lng: -122.5
    },

  ]

  constructor() { }

  ngOnInit() {
  }

}
