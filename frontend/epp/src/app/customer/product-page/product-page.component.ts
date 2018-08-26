import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  // Products Array
  allProducts;
  constructor(private _productService:ProductService) { }

  ngOnInit() {
    this._productService.allProducts().subscribe((res)=>{
      this.allProducts = res;
    })
  }

}
