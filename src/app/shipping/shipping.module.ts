import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShippingComponent } from './shipping.component';
import { RouterModule } from '@angular/router';
import { ShippingService } from './shipping.service';

const router = RouterModule.forChild([
  {path: '', component: ShippingComponent}
])

@NgModule({
  declarations: [
    ShippingComponent
  ],
  imports: [
    CommonModule,
    router
  ],
  providers: [
    ShippingService
  ]
})
export class ShippingModule { }
