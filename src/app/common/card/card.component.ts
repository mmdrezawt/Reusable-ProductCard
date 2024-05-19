import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductList } from 'src/app/model/product.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  Math: Math = Math;
  @Input() itemList!: ProductList[] | never;
  @Input() adminType: boolean = true;
  @Output() addClicked = new EventEmitter<any>;
  @Output() editClicked = new EventEmitter<any>;
  @Output() deleteClicked = new EventEmitter<any>;
  @Output() addToBasketClicked = new EventEmitter<any>;
  @Output() compareClicked = new EventEmitter<any>;

  onAddClick() {
    this.addClicked.emit();
  }
  onEditClick(item: ProductList) {
    this.editClicked.emit(item);
  }
  onDeleteClick(item: ProductList) {
    this.deleteClicked.emit(item);
  }
  onAddToBasketClick(item: ProductList) {
    this.addToBasketClicked.emit(item);
  }
  onCompareClick(item: ProductList) {
    this.compareClicked.emit(item);
  }

}
