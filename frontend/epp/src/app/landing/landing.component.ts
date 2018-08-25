import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private _userService:UserService, private router:Router) { }

  ngOnInit() {
  }
  setToCustomer(){
    this._userService.setUser('customer');
    this.router.navigateByUrl('/customer');
  }
  setToAdmin(){
    this._userService.setUser('admin');
    this.router.navigateByUrl('/admin');
  }

}
