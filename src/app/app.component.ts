import { Component, OnInit } from '@angular/core';
import Product from './products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'FrontEnd';
  products: Product[] = [];

  constructor() { }

  ngOnInit(): void {
    this.products = [
      { id: 1, name: 'Product 1', price: 100, checked: false },
      { id: 2, name: 'Product 1', price: 100, checked: false },
      { id: 3, name: 'Product 1', price: 100, checked: false },
      { id: 4, name: 'Product 2', price: 200, checked: false },
      { id: 5, name: 'Product 3', price: 300, checked: false },
    ];
  }

  onClick(e: any, index: number) {
    if (this.products.find(x => x.price === this.products[index].price
      && x.name === this.products[index].name
      && x.checked === true)) {
      e.target.checked = false;
    }
    this.products[index].checked = e.target.checked;
  }
}
