import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetProductsService {

  constructor(private _http:HttpClient) { }

  getAllProducts(){
    return this._http.get<[]>(environment.allProductsUrl);
  }

  getProducts(category:string){
    return this._http.get<[]>(environment.productsUrl+category);
  }

  getCategories(){
    return this._http.get<[]>(environment.categoriesUrl);
  }

}
