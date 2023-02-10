import { addProduct, calcStock, products } from './product.service';

addProduct({
  title: 'Vitaminas',
  createdAt: new Date(2023, 1, 1),
  stock: 4
});
addProduct({
  title: 'Monitor',
  createdAt: new Date(2023, 1, 21),
  stock: 8
});
addProduct({
  title: 'Playera',
  createdAt: new Date(2023, 2, 10),
  stock: 16,
  size: 'L'
});
console.log(products);
const total = calcStock();
console.log(total);

