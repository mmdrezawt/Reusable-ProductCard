import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductList } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'https://fakestoreapi.com/products';
  private addItem!: ProductList;
  private editItem!: ProductList;

  constructor(private http: HttpClient) { 
  }

  getItems() {
    return this.http.get(this.baseUrl);
  }

  addItemForForm(item: ProductList) {
    this.addItem = item;
  }
  addItemForProduct() {
    // return this.http.post(this.baseUrl, item);
    return this.addItem;
  }

  editItemForForm(item: ProductList) {
    this.editItem = item;
  }
  editItemForProduct() {
    // return this.http.put(this.baseUrl, item);
    return this.editItem;
  }

  deleteItemById(id: number) {
    // return this.http.delete(this.baseUrl + "/{{ id }}");
  }
}
