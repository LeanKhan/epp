import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = 'http://localhost:3000';

  constructor(private _http:HttpClient) { }

  // Add a single product
  addProduct(url,payload){
    return this._http.post(`${this.baseUrl}${url}`, payload);
  }
  // Get all products
  allProducts(){
    return this._http.get(`${this.baseUrl}/products`);
  }
  // Delete a product
  deleteProduct(id){
    return this._http.get(`${this.baseUrl}/products/delete/${id}`);
  }
  // Get a single product
  getProduct(id){
    return this._http.get(`${this.baseUrl}/products/${id}`);
  }
  // Update a single product
  updateProduct(id, payload){
    return this._http.post(`${this.baseUrl}/products/update/${id}`, payload);
  }
}
