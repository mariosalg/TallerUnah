import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CallHttpService } from './_core/services/call-http/call-http.service';
import { CartService } from './_core/services/cart/cart.service';
import { TopBarModule } from './_core/top-bar/top-bar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TopBarModule
  ],
  providers: [
    CallHttpService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
