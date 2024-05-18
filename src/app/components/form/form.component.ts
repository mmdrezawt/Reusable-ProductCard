import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { ProductList } from 'src/app/model/product.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formTitle: string = 'Add a new product';
  productForm!: FormGroup;
  id: number = 20; // Array Length

  constructor(public dialogRef: MatDialogRef<FormComponent>, private fb:FormBuilder, private api: ApiService, @Inject(MAT_DIALOG_DATA) public data: ProductList) {
  }
  ngOnInit(): void {
    this.productForm = this.fb.group({
      title: ['', Validators.required],
      price: ['', [Validators.required, Validators.pattern("[0-9]+([\.,][0-9]+)?")]],
      description: ['', Validators.required],
      category: ['electronics', Validators.required],
      image: ['', [Validators.required, Validators.pattern("https://.*")]]
    })
    if(this.data) {
      this.formTitle = 'Edit product';
      this.productForm.controls['title'].setValue(this.data.title);
      this.productForm.controls['price'].setValue(this.data.price);
      this.productForm.controls['description'].setValue(this.data.description);
      this.productForm.controls['category'].setValue(this.data.category);
      this.productForm.controls['image'].setValue(this.data.image);
    }
  }

  onSubmit() {
    if(!this.data) {
      this.id += 1;
      let addObj: ProductList = {
        id: this.id,
        title: this.productForm.controls['title'].value,
        price: +this.productForm.controls['price'].value,
        description: this.productForm.controls['description'].value,
        category: this.productForm.controls['category'].value,
        image: this.productForm.controls['image'].value,
        rating: {
          rate: 0,
          count: 0
        }
      }
      this.api.addItemForForm(addObj);
    }
    else {
      let editObj: ProductList = {
        id: this.data.id,
        title: this.productForm.controls['title'].value,
        price: +this.productForm.controls['price'].value,
        description: this.productForm.controls['description'].value,
        category: this.productForm.controls['category'].value,
        image: this.productForm.controls['image'].value,
        rating: {
          rate: this.data.rating.rate,
          count: this.data.rating.count,
        }
      }
      this.api.editItemForForm(editObj);
    }
    this.dialogRef.close('submit');
  }

  onCancel() {
    this.dialogRef.close();
  }

}
