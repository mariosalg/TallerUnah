import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/_core/services/cart/cart.service';
import { ProductListService } from '../product-list.service';
import { ProductoModels } from '../product.models';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: ProductoModels.Product | undefined;

  constructor(private route: ActivatedRoute,
    private cartService: CartService,
    private engine: ProductListService) { }

  ngOnInit(): void {
    let routeParams = this.route.snapshot.paramMap;
    let productIdFromRoute = Number(routeParams.get('productId'));
    
    this.initData(productIdFromRoute)
  }

  initData(id: number){
  
    // Find the product that correspond with the id provided in route.    
    this.product = this.engine.productos.find(product => product.id === id);
  }

  addToCart(product: ProductoModels.Product) {
    this.cartService.addToCart(product);
    window.alert('El producto ha sido agregado al carrito de compra!');
  }

}
