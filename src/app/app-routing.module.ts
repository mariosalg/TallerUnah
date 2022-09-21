import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'index/products'},
  {path: 'cart', loadChildren: () => import('./cart/cart.module').then(t => t.CartModule)},
  {path: 'shipping', loadChildren: () => import('./shipping/shipping.module').then(t => t.ShippingModule)},  
  {path: 'index', children: [
    {path: 'products', loadChildren: () => import('./product-list/product-list.module').then(t => t.ProductListModule)}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
