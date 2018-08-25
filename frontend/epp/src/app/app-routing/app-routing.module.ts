import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {LandingComponent} from '../landing/landing.component';
import {ProductPageComponent} from '../customer/product-page/product-page.component';
import {AdminComponent} from '../admin/admin.component';
import {AddProductComponent} from '../admin/add-product/add-product.component';
import {DashboardComponent} from '../admin/dashboard/dashboard.component';
import {EditProductComponent} from '../admin/edit-product/edit-product.component';
import { ProductDetailsComponent } from '../customer/product-details/product-details.component';
import { CustomerComponent } from '../customer/customer.component';

const routes : Routes = [
  {path: '', redirectTo: 'landing', pathMatch: 'full'},
  {path: 'landing', component: LandingComponent},
  {path: 'customer', component: CustomerComponent, children: [
    {path: '', redirectTo: 'products', pathMatch: 'full'},
    {path: 'products', component: ProductPageComponent, children: [
      {path: 'details/:id', component: ProductDetailsComponent}
    ]},
  ]},
  {path: 'admin', component: AdminComponent, children: [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'edit-product/:id', component: EditProductComponent},
    {path: 'add-product', component: AddProductComponent},
    {path: 'products', component: ProductPageComponent, children: [
      {path: 'details/:id', component: ProductDetailsComponent}
    ]}
  ]}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
