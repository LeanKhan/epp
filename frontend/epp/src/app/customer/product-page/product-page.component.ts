import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../product.service';
import { Router } from '@angular/router';
import {UserService} from '../../user.service';
@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  userUrl='customer/products/details';
  adminUrl = 'admin/products/details';
  user;

  // Products Array
  allProducts;
  constructor(private _productService:ProductService, private router:Router, private _userService:UserService) {
    this.router.paramsInheritanceStrategy = "always";
   }

  ngOnInit() {
    this._productService.allProducts().subscribe((res)=>{
      this.allProducts = res;
    })
    this.user = this._userService.user;
  }

  goToProductDetails(id){
    if(this.user == 'customer'){ //If user is a customer go to customer route
      this.router.navigateByUrl(`${this.userUrl}/${id}`);
    }else if(this.user == 'admin'){ //If user is an admin go to admin route
      this.router.navigateByUrl(`${this.adminUrl}/${id}`);
    }
    
  }

}
