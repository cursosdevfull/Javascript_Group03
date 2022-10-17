/* const product = {
  title: 'Pillow',
  imageUrl: 'https://...',
  description: 'Peruvian pillow',
  price: 50,
}; */

class ElementAttribute {
  constructor(name, value) {
    this.name = name;
    this.value = value;
  }
}

class Component {
  constructor(tagRenderId, isRendered = true) {
    this.tagRenderId = tagRenderId;

    if (isRendered) {
      this.render();
    }
  }

  render() {
    console.log('Calling method render...');
  }

  createRootElement(tag, cssClass, attributes) {
    const rootElement = document.createElement(tag);

    if (cssClass) {
      rootElement.className = cssClass;
    }

    if (attributes && attributes.length > 0) {
      for (const attribute of attributes) {
        // {name: "..", value: "..."}
        rootElement.setAttribute(attribute.name, attribute.value);
      }
    }

    document.getElementById(this.tagRenderId).append(rootElement);

    return rootElement;
  }
}

class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }
}

class ProductItem extends Component {
  constructor(product, tagRenderId) {
    super(tagRenderId, false);
    this.product = product;
    this.render();
  }

  addToCart() {
    App.addProductToCart(this.product);
  }

  render() {
    const prodEl = this.createRootElement('li', 'product-item');
    prodEl.innerHTML = `
        <div>
        <img src="${this.product.imageUrl}" alt="${this.product.title}" />
            <div class="product-item__content">
                <h2>${this.product.title}</h2>
                <h3>${this.product.price}</h3>
                <p>${this.product.description}</p>
                <button>Add to Cart</button>
            </div>
        </div>   
    `;
    const addCartButton = prodEl.querySelector('button');
    addCartButton.addEventListener('click', this.addToCart.bind(this));
  }
}

class ProductList extends Component {
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

class ShoppingCart extends Component {
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

class Shop {
  constructor() {
    this.render();
  }

  render() {
    this.cart = new ShoppingCart('app');
    new ProductList('app');
  }
}

class App {
  static cart;

  static init() {
    const shop = new Shop();
    this.cart = shop.cart;
  }

  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

App.init();

/* const shop = new Shop(); */

/* const productList = new ProductList('test'); */

/* 
const prod = new Product(
  'Pillow',
  'https://rnb.scene7.com/is/image/roomandboard/151908?size=675,400&scl=1&$prodzoom0$&size=675,400&scl=1',
  'Peruvian pillow',
  50
);

const prod2 = new Product(
  'Night Table',
  'https://cdn.shopify.com/s/files/1/2660/5106/products/63361715_Copeland_NS_1_1400x.jpg?v=1611003588',
  'Andean Night Table',
  500
);

const productItem = new ProductItem(prod, 'test');
const productItem2 = new ProductItem(prod2, 'test'); */

/* const prod = new Product('Pillow', 'https://...', 'Peruvian pillow', 50);
console.log(prod);

const component = new Component('test');
component.createRootElement('ul', 'cart', [
  new ElementAttribute('attribute1', 'attr1'),
  new ElementAttribute('attribute2', 'attr2'),
]);
 */
