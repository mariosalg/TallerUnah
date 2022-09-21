import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CallHttpService } from '../_core/services/call-http/call-http.service';
import { ProductoModels } from './product.models';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor(private callHttp: CallHttpService) { }

  private _productos: Array<ProductoModels.Product> = [];

  get productos(){
    return this._productos;
  }

  getProductos(){
    return this.callHttp.httpGet<Array<ProductoModels.Product>>(`${environment.api.url}/productos.json`)
    .pipe(map(response => {
      this._productos = response;
      return response;
    }))
  }
}
