const pricesWithoutTaxes = [20, 13.3, 50, 200, 89];
const taxInPercent = 0.2;

const pricesWithTaxes = [];

pricesWithoutTaxes.forEach((price, index, list) => {
  const priceWithTax = {
    position: index,
    taxAdjPrice: price * (1 + taxInPercent),
    listPrices: list,
  };
  pricesWithTaxes.push(priceWithTax);
});

console.log(pricesWithoutTaxes);
console.log(pricesWithTaxes);
