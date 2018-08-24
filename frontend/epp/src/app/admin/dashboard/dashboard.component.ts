import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ProductService} from '../../product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router, private _productService:ProductService) { }

  ngOnInit() {
    this._productService.allProducts().subscribe((res)=>{
      this.allProducts = res;
    })
  }
  allProducts:any;

  goToNewProduct(){
    this.router.navigateByUrl('/admin/add-product');
  }
  get getAllProducts(){
    return this._productService.allProducts().subscribe((res)=>{
      this.allProducts = res;
    })
  }

}
