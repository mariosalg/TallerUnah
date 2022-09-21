import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShippingModels } from './shipping.models';
import { ShippingService } from './shipping.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  constructor(private engine: ShippingService) { }

  shippingCosts!: Observable<Array<ShippingModels.Shipping>>;

  ngOnInit(): void {
    this.initData()
  }

  initData(){
    this.shippingCosts = this.engine.getShippingPrices()
  }

}
