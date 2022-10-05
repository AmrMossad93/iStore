import {Injectable} from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {ProductsService} from "../Service/products.service";
import {IBaseData} from "../../../Core/Models/Interface/Base/base-data";
import {IProduct} from "../Model/Interface/product";

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<IBaseData<IProduct>> {
  constructor(private productsService: ProductsService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<IBaseData<IProduct>> {
    // @ts-ignore
    let catalogueId: string = route.paramMap.get('catalogueId');
    return this.productsService.getProductsByCatalogueId(catalogueId)
  }
}
