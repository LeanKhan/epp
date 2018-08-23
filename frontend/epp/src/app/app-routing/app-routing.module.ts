import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {LandingComponent} from '../landing/landing.component';
import {ProductPageComponent} from '../product-page/product-page.component';

const routes : Routes = [
  {path: '', redirectTo: 'landing', pathMatch: 'full'},
  {path: 'landing', component: LandingComponent},
  {path: 'products', component: ProductPageComponent}
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
