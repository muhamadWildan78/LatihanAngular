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


  saveCategory(cate: Category ): Observable<any>{
    let url = '/input';
    return this.http.post(environment.baseUrl+url, cate)
      .pipe( map(data => data))
  }

  updateCategory(cate: Category ): Observable<any>{
    let url = '/update';
    return this.http.post(environment.baseUrl+url, cate)
      .pipe( map(data => data))
  }

  getCatById(id: number): Observable<any>{
    return this.http.get(environment.baseUrl+'/findById/'+id)
      .pipe( map(data => data))
  }
}
