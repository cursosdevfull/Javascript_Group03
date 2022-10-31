import { ProductList } from './product-list.js';
import { ShoppingCart } from './shopping-cart.js';

export class Shop {
  constructor() {
    this.render();
  }

  render() {
    this.cart = new ShoppingCart('app');
    new ProductList('app');
  }
}
