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
    this.products = [
      new Product(
        'Pillow',
        'https://rnb.scene7.com/is/image/roomandboard/151908?size=675,400&scl=1&$prodzoom0$&size=675,400&scl=1',
        'Peruvian pillow',
        50
      ),
      new Product(
        'Night Table',
        'https://cdn.shopify.com/s/files/1/2660/5106/products/63361715_Copeland_NS_1_1400x.jpg?v=1611003588',
        'Andean Night Table',
        500
      ),
    ];
    this.renderProducts();
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
