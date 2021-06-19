import { Component, OnInit } from '@angular/core';
import {Product} from '../../Product'
import {PRODUCTS} from '../../again-products'

@Component({
  selector: 'app-productsgrid',
  templateUrl: './productsgrid.component.html',
  styleUrls: ['./productsgrid.component.css']
})
export class ProductsgridComponent implements OnInit {
  products: Product[] = PRODUCTS;

  constructor() { }

  ngOnInit(): void {
  }

}
