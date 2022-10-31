import { Component } from './component.js';

export class ShoppingCart extends Component {
  items = [];

  constructor(tagRenderId) {
    super(tagRenderId);
    console.log('ShoppingCart constructor');
  }

  cartItems(value) {
    this.items = value;
    this.totalOutput.innerHTML = `Total: ${this.totalAmount().toFixed(2)}`;
  }

  totalAmount() {
    const sum = this.items.reduce(
      (previousValue, currentValue) => previousValue + currentValue.price,
      0
    );

    return sum;
  }

  addProduct(product) {
    const updateItems = [...this.items];
    updateItems.push(product);
    this.cartItems(updateItems);
  }

  render() {
    const cartEl = this.createRootElement('section', 'cart');
    cartEl.innerHTML = `
          <h2>Total: 0</h2>
          <button>Order Now</button>
      `;

    this.totalOutput = cartEl.querySelector('h2');
  }
}
