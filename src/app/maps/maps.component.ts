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

  constructor() { }

  ngOnInit(): void {
    this.latitude=13;
    this.longitude=15;

  }

}
