import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductoModels } from '../product-list/product.models';
import { ShippingModels } from '../shipping/shipping.models';
import { CartService } from '../_core/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(
    private cartService: CartService
  ) { }

  items: Array<ProductoModels.Product> = [];

  checkoutForm = new FormGroup({
    name: new FormControl(null, Validators.required),
    address: new FormControl(null, Validators.required),
  })

  ngOnInit(): void {
    this.initData()
  }

  get total(){
    let total  = 0
    if(this.items.length > 0) total = this.items.map(m => m.price).reduceRight((r, n) => r + n);
    return total;
  }

  initData(){
    this.items = this.cartService.getItems();
  }

  onSubmit(): void {
    // Process checkout data here

    if(!this.checkoutForm.valid) return;

    
    let shippingAddres: ShippingModels.DatosEnvio = this.checkoutForm.getRawValue();

    let productos = this.cartService.getItems();
    this.cartService.ordenDeCompraProductos({producto: productos, shipping: shippingAddres})
    .subscribe({next: (response => {
      /**Aqui llega la respuesta del servidor cuando todo esta bien */
      console.log(response)
    }), error: (e => {
      /**Aqui entra cuando hay un error en el servidor y nos responde con el tipo de error 
       * aqui debemos de saber que vamos hacer con esa respuesta si mostrarla al usuario o 
       * hacer algun procedimiento especial que tengamos para los errores
       */
      console.error(e);
    })})
    
    console.warn('Tu orden ha sido enviada', shippingAddres);
    
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

}
