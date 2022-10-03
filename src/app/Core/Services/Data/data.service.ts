import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) {
  }

  get(API_PATH: string): Observable<any> {
    return this.httpClient.get(`${environment.apiEndPoint}${API_PATH}`);
  }

  post(API_PATH: string, OBJ: any): Observable<any> {
    return this.httpClient.post(`${environment.apiEndPoint}${API_PATH}`, OBJ);
  }
}
