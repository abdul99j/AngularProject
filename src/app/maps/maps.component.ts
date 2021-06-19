import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  title='Angular Maps';
  latitude:number;
  longitude:number;
  map: google.maps.Map; 
  infoWindow: google.maps.InfoWindow;

  constructor() { 
    if (navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition( pos => {
        this.longitude = +pos.coords.longitude;
        this.latitude = +pos.coords.latitude;
      });
    }}

  ngOnInit(): void {
    console.log("IN MAPS Component");
    }

    
  

}
