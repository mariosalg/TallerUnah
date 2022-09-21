import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CallHttpService } from '../_core/services/call-http/call-http.service';
import { ShippingModels } from './shipping.models';

@Injectable({
  providedIn: 'root'
})
export class ShippingService {

  constructor(private callHttp: CallHttpService) { }

  getShippingPrices() {
    return this.callHttp.httpGet<Array<ShippingModels.Shipping>>(`${environment.api.url}/shipping.json`);
  }
}
