import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { ProductListService } from './product-list.service';
import { ProductoModels } from './product.models';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private engine: ProductListService) { }

  products: Array<ProductoModels.Product> = [];

  ngOnInit(): void {
    this.initData();
  }

  async initData(){
    let productos = await firstValueFrom(this.engine.getProductos())
    this.products = productos;
  }

  share(){
    window.alert('El producto ha sido compartido...!');
  }

  onNotify(event: ProductoModels.Product) {
    window.alert(`Se le notificará cuando el producto salga a la venta... ${event.name}`);
  }
}
