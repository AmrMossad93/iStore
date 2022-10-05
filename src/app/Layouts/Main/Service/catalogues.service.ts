import {Injectable} from '@angular/core';
import {DataService} from "../../../Core/Services/Data/data.service";
import {map, Observable, shareReplay} from "rxjs";
import {IBaseData} from "../../../Core/Models/Interface/Base/base-data";
import {ICatalogue} from "../Model/Interface/catalogue";
import {CATALOGUE_API_NAME} from "../Model/Constant/CATALOGUE_API_NAME";

@Injectable({
  providedIn: 'root'
})
export class CataloguesService {

  constructor(private dataService: DataService) {
  }

  getCatalogueList(): Observable<IBaseData<ICatalogue>> {
    return this.dataService.get(CATALOGUE_API_NAME.list)
  }
}
