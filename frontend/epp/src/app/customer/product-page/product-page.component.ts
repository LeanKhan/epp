import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  url='customer/products/details';

  // Products Array
  allProducts;
  constructor(private _productService:ProductService, private router:Router) { }

  ngOnInit() {
    this._productService.allProducts().subscribe((res)=>{
      this.allProducts = res;
    })
  }

  goToProductDetails(id){
    this.router.navigateByUrl(`${this.url}/${id}`);
  }

}
