import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductList } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) { 
  }

  getItems() {
    return this.http.get(this.baseUrl);
  }

  addItem(item: ProductList) {
    // return this.http.post(this.baseUrl, item);
  }

  deleteItemById(id: number) {
    // return this.http.delete(this.baseUrl, id);
  }
}
