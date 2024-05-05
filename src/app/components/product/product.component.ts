import { Component, OnInit } from '@angular/core';
import { ProductList } from 'src/app/model/product.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productList!: ProductList[];

  constructor(private api: ApiService) {
  }
  ngOnInit() {
    this.api.getProducts().subscribe((response: any) => {
      this.productList = response;
    })
  }

}
