import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule} from '@angular/forms';

const router = RouterModule.forChild([
  {path: '', component: CartComponent}
])

@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    router,
    ReactiveFormsModule
  ]
})
export class CartModule { }
