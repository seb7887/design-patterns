const Shopper = require('./Shopper');
const Sales = require('./Sales');
const Category = require('./Category');

const ssrCategory = new Category('SSR Category');
const reactCategory = new Category('React.js Category');
const nodeCategory = new Category('Node Category');

const maynard = new Shopper('Maynard');
const james = new Shopper('James');
const keenan = new Shopper('Keenan');

const blackFriday = new Sales();

ssrCategory.subscribe(maynard);
ssrCategory.subscribe(james);
ssrCategory.subscribe(keenan);

reactCategory.subscribe(maynard);

nodeCategory.subscribe(keenan);

ssrCategory.sale(20);
reactCategory.sale(15);
nodeCategory.sale(5);

console.log(blackFriday.sales);