import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
    this.products = [
      { id: 1, name: 'Product 1', price: 100, isChecked: false },
      { id: 2, name: 'Product 1', price: 100, isChecked: false },
      { id: 3, name: 'Product 1', price: 100, isChecked: false },
      { id: 4, name: 'Product 2', price: 200, isChecked: false },
      { id: 5, name: 'Product 3', price: 300, isChecked: false },
    ];
  }

  checkUncheckAll(e: any) {
    for (var i = 0; i < this.products.length; i++) {
      if (this.products.find(x => x.price === this.products[i].price
        && x.name === this.products[i].name
        && x.isChecked === true)) {
        this.products[i].isChecked = false;
      } else {
        this.products[i].isChecked = this.isAllChecked;
      }
    }

    this.getCheckedItemList();
  }

  isAllSelected(e: any, index: number) {
    if (this.checkedProducts.find(x => x.price === this.products[index].price
      && x.name === this.products[index].name
      && x.isChecked === true)) {
      e.target.checked = false;
      e.target.disabled = true;
    }
    this.products[index].isChecked = e.target.checked;
    this.isAllChecked = this.products.every(function (item: any) {
      return item.isChecked == true;
    });

    this.getCheckedItemList();
  }

  getCheckedItemList() {
    this.checkedProducts = [];
    for (var i = 0; i < this.products.length; i++) {
      if (this.products[i].isChecked)
        this.checkedProducts.push(this.products[i]);
    }
  }

}
