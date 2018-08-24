import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = 'http://localhost:3000';

  constructor(private _http:HttpClient) { }

  addProduct(url,payload){
    return this._http.post(`${this.baseUrl}${url}`, payload);
  }
  allProducts(){
    return this._http.get(`${this.baseUrl}/products`);
  }
}
