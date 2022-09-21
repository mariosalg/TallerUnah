import { Injectable } from '@angular/core';
import { ProductoModels } from 'src/app/product-list/product.models';
import { ShippingModels } from 'src/app/shipping/shipping.models';
import { CallHttpService } from '../call-http/call-http.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private callHttp: CallHttpService) { }

  private items: Array<ProductoModels.Product> = [];

  addToCart(product: ProductoModels.Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  ordenDeCompraProductos(compra: {producto: Array<ProductoModels.Product>, shipping: ShippingModels.DatosEnvio}){
    /**Aqui se debe agregar la direccion del api donde vamos a crear la orden de venta,
     *  como no tenemos  backend para el ejemplo aqui va darnos un error que no encuentra el servidor*/
    return this.callHttp.httpPost(``, compra);
  }
}
