import {Injectable} from '@angular/core';
import {DataService} from "../../../../../Core/Services/Data/data.service";
import {Observable} from "rxjs";
import {IProduct, IProductOBJ} from "../Model/Interface/product";
import {IBaseData} from "../../../../../Core/Models/Interface/Base/base-data";
import {PRODUCT_API_NAME} from "../Model/Constant/PRODUCT_API_NAME";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private dataService: DataService) {
  }

  getProductsByCatalogueId(catalogueId: string): Observable<IBaseData<IProduct>> {
    const prod: IProductOBJ = {
      catalogueId,
      productName: '',
      productNumber: '',
      customerName: '',
      sortByPrice: 'HIGH'
    }
    return this.dataService.post(PRODUCT_API_NAME.list, prod)
  }
}
