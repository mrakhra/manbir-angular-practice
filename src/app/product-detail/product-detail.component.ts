import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit() {
    var paramMap = this.route.snapshot.paramMap;
    var productId = Number(paramMap.get('productId'));
    this.product = products.find((c) => c.id == productId);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    alert('Your product has been added to the cart!');
  }
}
