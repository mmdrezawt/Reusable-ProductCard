import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductList } from 'src/app/model/product.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() itemList!: ProductList[] | never;
  @Output() addClicked = new EventEmitter<any>;
  @Output() editClicked = new EventEmitter<any>;
  @Output() deleteClicked = new EventEmitter<any>;

  onAddClick() {
    this.addClicked.emit();
  }
  onEditClick(item: ProductList) {
    this.editClicked.emit(item);
  }
  onDeleteClick(item: ProductList) {
    this.deleteClicked.emit(item);
  }

}
