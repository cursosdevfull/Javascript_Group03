const todaySales = [200, 400, 150, 600, 139, 500, 340, 110, 80, 1200];

const totalSales = todaySales.reduce((accum, sale) => {
  accum = accum + sale;

  return accum;
}, 0);

console.log(totalSales);

const salesBooksByBookcase = [
  { local: 'Librería 1', title: 'Angular', sales: 2000 },
  { local: 'Librería 2', title: 'Angular', sales: 6000 },
  { local: 'Librería 1', title: 'NodeJS', sales: 3000 },
  { local: 'Librería 3', title: 'Microservices', sales: 5000 },
  { local: 'Librería 2', title: 'Microservices', sales: 4000 },
];

/*
 {
   Angular: 8000,
   NodeJS: 3000,
   Microservices: 9000
 }
*/

const totalSalesByBook = salesBooksByBookcase.reduce((accum, sale) => {
  if (accum[sale.title]) {
    accum[sale.title] = accum[sale.title] + sale.sales;
  } else {
    accum[sale.title] = sale.sales;
  }

  return accum;
}, {});

console.log(totalSalesByBook);

/*
  [
    {title: "Angular", totalSales: 8000},
    {title: "NodeJS", totalSales: 3000},
    {title: "Microservices", totalSales: 9000}

  ]
*/

// { local: 'Librería 1', title: 'Angular', sales: 2000 },

const reportSales = salesBooksByBookcase.reduce((accum, sale) => {
  const positionFound = accum.findIndex((item) => {
    return item.title === sale.title;
  });

  if (positionFound === -1) {
    accum.push({ title: sale.title, totalSales: sale.sales });
  } else {
    accum[positionFound].totalSales += sale.sales;
  }

  return accum;
}, []);

console.log(reportSales);

const shoppingCart = [
  { product: 'pillow', price: 10, category: 'bedroom' },
  { product: 'carpet', price: 50.8, category: 'living room' },
  { product: 'swimming pool', price: 900, category: 'outdoor' },
  { product: 'night table', price: 100, category: 'bedroom' },
];

const totalCategoryBedroom = shoppingCart
  .filter((item) => item.category === 'bedroom')
  .reduce((accum, item) => accum + item.price, 0);

console.log(totalCategoryBedroom);

// filter, reduce

// salida = 110
