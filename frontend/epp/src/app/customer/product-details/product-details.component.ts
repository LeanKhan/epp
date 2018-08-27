import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ProductService} from '../../product.service';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  
  thisId;
  thisProduct;
  thisUser;

  constructor(private router:Router, private _productService:ProductService, private thisRoute:ActivatedRoute, private _userService:UserService) {  }

  ngOnInit() {

    this.thisRoute.paramMap.subscribe(params =>{
      this.thisId = params.get('id');
    });

    this._productService.getProduct(this.thisId).subscribe(product =>{
      this.thisProduct = product;
      document.querySelector('title').innerText = 'Products - ' + this.thisProduct.name;
    });

    

    this.thisUser = this._userService.user 

  }



}
