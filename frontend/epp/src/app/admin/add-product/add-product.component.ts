import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {ProductService} from '../../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productForm: FormGroup;
  constructor(private _productService: ProductService) { 
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
    }, Validators.required)
  }

  ngOnInit() {
  }
  addProductUrl = '/products/add-product';
  // Get the entire form
  get getForm(){
    return this.productForm.value;
  }
  get getFormGroup(){
    return this.productForm;
  }


    // Get name form control
  get getName(){
    return this.productForm.get('name');
  } 

  // Get category
  get getCategory(){
    return this.productForm.get('category');
  }
  // Get description
  get getDescription(){
    return this.productForm.get('description')
  }
  // Get amenities
  get getAmenities(){
    return this.productForm.get('amenities');
  }
  // Get price
  get getPrice(){
    return this.productForm.get('price');
  }
  // Get location
  get getLocation(){
    return this.productForm.get('location');
  }
  // Get address
  get getAddress(){
    return this.productForm.get('address');
  }

  addProduct(){
    this._productService.addProduct(this.addProductUrl, this.getForm).subscribe((res)=>{
      alert(JSON.stringify(res));
    });
    this.productForm.setValue(
      {"name":null,
      "category":null,
      "description":null,
      "amenities":{"food":false,"parking":false,"shower":false,"wifi":false},
      "price":"000",
      "location":null,
      "address":null} 
    );
  }
  data;
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
