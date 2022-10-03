import {Injectable} from '@angular/core';
import {DataService} from "../../../Core/Services/Data/data.service";
import {map, Observable, shareReplay} from "rxjs";
import {API_NAME} from "../../../Core/Models/Static/API_NAME";
import {IBaseData} from "../../../Core/Models/Interface/Base/base-data";
import {ICatalogue} from "../../Model/Interface/Catalogue/catalogue";
@Injectable({
  providedIn: 'root'
})
export class CataloguesService {

  constructor(private dataService: DataService) {
  }

  getCatalogueList(): Observable<IBaseData<ICatalogue>> {
    return this.dataService.get(API_NAME.catalogue.list)
  }
}
