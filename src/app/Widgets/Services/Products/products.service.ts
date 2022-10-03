import {Injectable} from '@angular/core';
import {DataService} from "../../../Core/Services/Data/data.service";
import {Observable} from "rxjs";
import {API_NAME} from "../../../Core/Models/Static/API_NAME";
import {IProduct, IProductOBJ} from "../../Model/Interface/Product/product";
import {IBaseData} from "../../../Core/Models/Interface/Base/base-data";

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
    return this.dataService.post(API_NAME.products.listByCatalogueId, prod)
  }
}
