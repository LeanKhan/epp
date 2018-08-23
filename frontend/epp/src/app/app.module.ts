import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from '../app/app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import {NavComponent} from './nav/nav.component';
import { ProductPageComponent } from './product-page/product-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavComponent,
    ProductPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
