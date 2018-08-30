import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {ProductService} from '../../product.service';
import {UserService} from '../../user.service';
import {Router} from '@angular/router';
import { load } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productForm: FormGroup;
  constructor(private _productService: ProductService,private _userService:UserService,private router:Router) { 
    this.productForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'category': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
      'amenities': new FormGroup({
        'food': new FormControl(false),
        'parking': new FormControl(false),
        'shower': new FormControl(false),
        'wifi': new FormControl(false)
      }, Validators.required),
      'price': new FormControl(null, Validators.required),
      'city': new FormControl(null, Validators.required),
      'address': new FormControl(null, Validators.required)
    }, Validators.required)
  }

  ngOnInit() {
    document.querySelector('title').innerText = `${this._userService.user} - Add Product`;
  }
  addProductUrl = '/products/add-product';

  // Navigate to Dashboard
  goToDashboard(){
    this.router.navigateByUrl('/admin/dashboard');
  }


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
  // Get city
  get getCity(){
    return this.productForm.get('city');
  }
  // Get address
  get getAddress(){
    return this.productForm.get('address');
  }

  addProduct(event: Event){
    let loader = document.getElementById('loader');
    loader.style.display = 'block';
    let payload = this.getForm;
    // Add Image only when Save is clicked
    let imageForm = new FormData();
    let file = event.target["ownerDocument"].all.inputFile["files"][0]

    imageForm.append('img', file);
    this._productService.addImage(imageForm).subscribe((res)=>{

      console.log(res);
      payload["picture"] = res;
      

      this._productService.addProduct(this.addProductUrl, payload).subscribe((res)=>{
        alert(JSON.stringify(res));
      });
      this.productForm.setValue(
        {"name":null,
        "category":null,
        "description":null,
        "amenities":{"food":false,"parking":false,"shower":false,"wifi":false},
        "price":null,
        "city":null,
        "address":null} 
      );
    }, (err)=>{console.error(err)},()=>{ loader.style.display = 'none',
    this.goToDashboard()
  })  

  }
  // show Event
  showEvent(e: Event){
    console.log(e);
  }

  clearForm(){
    this.productForm.setValue(
      {"name":null,
      "category":null,
      "description":null,
      "amenities":{"food":false,"parking":false,"shower":false,"wifi":false},
      "price":null,
      "city":null,
      "address":null} 
    )
  }
}
