import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {ProductService} from '../../product.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  productForm: FormGroup;
  thisProduct;
  thisId;
    constructor(private _productService:ProductService, private router:Router, private thisRoute:ActivatedRoute) {
      this.productForm = new FormGroup({
        'name': new FormControl(null, Validators.required),
        'category': new FormControl(null, Validators.required),
        'description': new FormControl(null, Validators.required),
        'amenities': new FormGroup({
          'food': new FormControl(false),
          'parking': new FormControl(false),
          'shower': new FormControl(false),
          'wifi': new FormControl(false)
        }),
        'price': new FormControl(null, Validators.required),
        'location': new FormControl(null, Validators.required),
        'address': new FormControl(null, Validators.required)
      });
  }
  ngOnInit() {
    // console.log(this.router.parseUrl(this.router.url));
   this.thisRoute.paramMap.subscribe(params => {
     this.thisId = params.get('id');
   });
   this._productService.getProduct(this.thisId).subscribe(res=>{
    this.thisProduct = res;
    this.productForm.setValue({
      "name": this.thisProduct.name,
      "category": this.thisProduct.category,
      "description": this.thisProduct.description,
      "amenities": this.thisProduct.amenities,
      "price": this.thisProduct.price,
      "location": this.thisProduct.location,
      "address": this.thisProduct.address
    });
  });

  
  }

  // Get the entire Form (Values)
  get getForm(){
    return this.productForm.value;
  }
  // Get the entire Form group
  get getFormGroup(){
    return this.productForm;
  }
  // Get name form control
  get getName(){
    return this.productForm.get("name");
  }
  // Get category form control
  get getCategory(){
    return this.productForm.get("category");
  }
  // Get description form control
  get getDescription(){
    return this.productForm.get("desription");
  }
  // Get amenities form control
  get getAmenities(){
    return this.productForm.get("amenities");
  }
  // Get price form control
  get getPrice(){
    return this.productForm.get("price");
  }
  // Get location form control
  get getLocation(){
    return this.productForm.get("location");
  }
  // Get address form control
  get getAddress(){
    return this.productForm.get("address");
  }

  // Update form function
  updateProduct(){
    this._productService.updateProduct(this.thisId, this.getForm).subscribe((res)=>{
      console.log(res);
      this.goToDashboard();
    });
  }
  
  // Navigate to Dashboard
  goToDashboard(){
    this.router.navigateByUrl('/admin/dashboard');
  }

  // Clear form function
  clearForm(){
    this.productForm.setValue(
      {"name":null,
      "category":null,
      "description":null,
      "amenities":{"food":false,"parking":false,"shower":false,"wifi":false},
      "price":"000",
      "location":null,
      "address":null} 
    )
  }
}
