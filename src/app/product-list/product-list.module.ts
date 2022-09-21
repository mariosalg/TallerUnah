import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { RouterModule } from '@angular/router';
import { ProductListService } from './product-list.service';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const router = RouterModule.forChild([
  {path: '', component: ProductListComponent},
  {path: 'p/:productId', component: ProductDetailsComponent }
])

@NgModule({
  declarations: [
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    router
  ],
  providers: [
    ProductListService
  ]
})
export class ProductListModule { }
