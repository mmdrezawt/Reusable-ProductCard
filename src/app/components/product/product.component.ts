import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductList } from 'src/app/model/product.model';
import { ApiService } from 'src/app/services/api.service';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productList!: ProductList[];

  constructor(private api: ApiService, private dialog: MatDialog) {
  }
  ngOnInit() {
    this.api.getItems().subscribe((response: any) => {
      this.productList = response;
    })
  }

  onAddClick() {
    this.dialog.open(FormComponent, {
      width: '500px',
      height: '500px',
    });
  }

  onEditClick(e: ProductList) {
    this.dialog.open(FormComponent, {
      width: '500px',
      height: '500px',
    });
  }

  onDeleteClick(e: ProductList) {
    // this.api.deleteItemById(e.id);
    let index = this.productList.indexOf(e);
    this.productList.splice(index, 1);
  }

}
