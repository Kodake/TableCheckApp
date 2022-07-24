import { Component, OnInit } from '@angular/core';
import Product from 'src/app/products';

@Component({
  selector: 'app-check-event-condition',
  templateUrl: './check-event-condition.component.html',
  styleUrls: ['./check-event-condition.component.css']
})
export class CheckEventConditionComponent implements OnInit {
  products: Product[] = [];

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

  onClick(e: any, index: number) {
    if (this.products.find(x => x.price === this.products[index].price
      && x.name === this.products[index].name
      && x.isChecked === true)) {
      e.target.checked = false;
    }
    this.products[index].isChecked = e.target.checked;
  }

}
