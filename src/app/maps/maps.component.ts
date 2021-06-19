import { Component, NgZone, OnInit } from '@angular/core';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  latitude:number;
  longitude:number;
  zoom:number;
  private geoCoder:any;

  constructor(private mapsApiLoader:MapsAPILoader,private ngZone:NgZone ) { }

   ngOnInit(): void {
     
   }
   
    
  

}
