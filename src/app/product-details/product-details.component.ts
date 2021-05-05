import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    // first get product id
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number( routeParams.get('productId') );

    // find correct product in products
    this.product = products.find( product => product.id === productIdFromRoute );
  }

  addToCart(product): void {

  }
}
