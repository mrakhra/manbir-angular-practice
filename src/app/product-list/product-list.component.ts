import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products = products;

  constructor() {}

  ngOnInit() {}

  share() {
    alert('This product has been shared');
  }

  onNotify() {
    alert('This is for notification');
  }
}
