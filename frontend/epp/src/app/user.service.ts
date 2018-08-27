import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user;

  constructor() {
    if(localStorage.getItem("appUser")){
      this.user = localStorage.getItem("appUser")
    }
   }
  setUser(u){
    localStorage.setItem("appUser", u);
    this.user = u;
  }
}
