import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Category} from "../model/category.model";

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }

  ListCategory(): Observable<any>{
    return this.http.get(environment.baseUrl+'/list').pipe( map(data => data))
  }
  saveCategory(data: Category ): Observable<any>{
    return this.http.post(environment.baseUrl+'/input', data).pipe( map(data => data))
  }
}
