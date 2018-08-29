import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ProductService} from '../../product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router, private _productService:ProductService) {
    this.router.paramsInheritanceStrategy = "always";
   }

  ngOnInit() {
    document.querySelector('title').innerText = 'Admin - Dashboard';

    this._productService.allProducts().subscribe((res)=>{
      this.allProducts = res;
    })
  }
  allProducts:any;

  goToNewProduct(){
    this.router.navigateByUrl('/admin/add-product');
  }
  goToEditProduct(id){
    this.router.navigateByUrl(`/admin/edit-product/${id}`); 
  }
  
  // Get all products
  get getAllProducts(){
    return this._productService.allProducts().subscribe((res)=>{
      this.allProducts = res;
    })
  };

  // Delete a single product
  deleteProduct(id,i){
    this._productService.deleteProduct(id).subscribe((res)=>{
      alert(JSON.stringify(res));
    })
    this.allProducts.splice(i,1)
  }
}