import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable, of} from 'rxjs';
import {CataloguesService} from "../Service/catalogues.service";
import {IBaseData} from "../../../Core/Models/Interface/Base/base-data";
import {ICatalogue} from "../Model/Interface/catalogue";

@Injectable({
  providedIn: 'root'
})
export class CatalogueResolver implements Resolve<IBaseData<ICatalogue>> {
  constructor(private cataloguesService: CataloguesService) {
  }

  resolve(): Observable<IBaseData<ICatalogue>> {
    return this.cataloguesService.getCatalogueList()
  }
}
