import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductoModels } from '../product.models';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

  constructor() { }

  @Input() product: ProductoModels.Product | undefined;
  @Output() notify = new EventEmitter<ProductoModels.Product>();

  ngOnInit(): void {
  }

  notificar(producto: ProductoModels.Product){
    this.notify.emit(producto);
  }
}
