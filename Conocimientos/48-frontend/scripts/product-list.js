import { Component } from './component.js';
import { ElementAttribute } from './element-attribute.js';
import { ProductItem } from './product-item.js';
import { Product } from './product.js';

export class ProductList extends Component {
  products = [];

  constructor(tagRenderId) {
    super(tagRenderId);
    this.loadData();
  }

  loadData() {
    fetch('http://localhost:5000/product')
      .then((res) => res.json())
      .then((result) => {
        this.products = result.map(
          (el) => new Product(el.title, el.url, el.description, el.price)
        );
        this.renderProducts();
      });
  }

  render() {
    this.createRootElement('ul', 'product-list', [
      new ElementAttribute('id', 'prod-list'),
    ]);

    if (this.products && this.products.length > 0) {
      this.renderProducts();
    }
  }

  renderProducts() {
    for (const prod of this.products) {
      new ProductItem(prod, 'prod-list');
    }
  }
}
