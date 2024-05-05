import { Component, Input } from '@angular/core';
import { ProductList } from 'src/app/model/product.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() productList: ProductList[] = [];

}
