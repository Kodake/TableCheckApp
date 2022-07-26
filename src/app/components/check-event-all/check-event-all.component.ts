import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, AfterContentChecked } from '@angular/core';
import Product from 'src/app/products';

@Component({
  selector: 'app-check-event-all',
  templateUrl: './check-event-all.component.html',
  styleUrls: ['./check-event-all.component.css']
})
export class CheckEventAllComponent implements OnInit {
  isAllChecked: boolean = false;
  products: Product[] = [];
  checkedProducts: Product[] = [];
  reverse: boolean = false;
  p: number = 1;

  constructor() { }

  ngOnInit(): void {
    this.products = [
      { id: 1, name: 'Product 1', price: 100, isChecked: false },
      { id: 2, name: 'Product 2', price: 200, isChecked: false },
      { id: 3, name: 'Product 3', price: 300, isChecked: false },
      { id: 4, name: 'Product 4', price: 400, isChecked: false },
      { id: 5, name: 'Product 5', price: 500, isChecked: false },
      { id: 6, name: 'Product 6', price: 600, isChecked: false },
      { id: 7, name: 'Product 7', price: 700, isChecked: false },
      { id: 8, name: 'Product 8', price: 800, isChecked: false },
      { id: 9, name: 'Product 9', price: 900, isChecked: false },
      { id: 10, name: 'Product 10', price: 100, isChecked: false },
      { id: 11, name: 'Product 11', price: 200, isChecked: false },
      { id: 12, name: 'Product 12', price: 300, isChecked: false },
      { id: 13, name: 'Product 13', price: 400, isChecked: false },
      { id: 14, name: 'Product 14', price: 500, isChecked: false },
      { id: 15, name: 'Product 15', price: 600, isChecked: false },
      { id: 16, name: 'Product 16', price: 700, isChecked: false },
      { id: 17, name: 'Product 17', price: 800, isChecked: false },
      { id: 18, name: 'Product 18', price: 900, isChecked: false },
      { id: 19, name: 'Product 19', price: 100, isChecked: false },
      { id: 20, name: 'Product 20', price: 200, isChecked: false },
      { id: 21, name: 'Product 21', price: 300, isChecked: false },
      { id: 22, name: 'Product 22', price: 400, isChecked: false },
      { id: 23, name: 'Product 23', price: 500, isChecked: false },
      { id: 24, name: 'Product 24', price: 600, isChecked: false },
      { id: 25, name: 'Product 25', price: 700, isChecked: false },
      { id: 26, name: 'Product 26', price: 800, isChecked: false },
      { id: 27, name: 'Product 27', price: 900, isChecked: false },
      { id: 28, name: 'Product 28', price: 100, isChecked: false },
      { id: 29, name: 'Product 29', price: 200, isChecked: false },
      { id: 30, name: 'Product 1', price: 100, isChecked: false },
      { id: 31, name: 'Product 2', price: 200, isChecked: false },
      { id: 32, name: 'Product 3', price: 300, isChecked: false },
      { id: 33, name: 'Product 4', price: 400, isChecked: false },
      { id: 34, name: 'Product 5', price: 500, isChecked: false },
    ];
  }

  checkUncheckAll(e: any) {
    for (var i = 0; i < this.products.length; i++) {
      this.validateExistCheckedItem(i, this.products[i]);
    }
  }

  isSelected(e: any, index: number) {
    this.products[index].isChecked = !this.products[index].isChecked;
    return this.validateIndividualCheckedItem(e, index, this.products[index]);
  }

  validateIndividualCheckedItem(e: any, index: number, product: Product) {
    if (this.products.find(x => x.isChecked && x.name === product.name && x.price === product.price)) {
      e.target.checked = false;
      return this.products[index].isChecked = false;
    }

    e.target.checked = true;
    return this.products[index].isChecked = true;
  }

  validateExistCheckedItem(index: number, product: Product) {
    if (this.products.find(x => x.isChecked && x.name === product.name && x.price === product.price)) {
      return this.products[index].isChecked = false;
    }

    return this.products[index].isChecked = this.isAllChecked;
  }

}
