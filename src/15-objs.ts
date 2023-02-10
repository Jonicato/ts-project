(() => {

  type Sizes = 'S' | 'M' | 'L' | 'XL';
  type Product = {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }

  const products: Product[] = [];

  const addProduct = (data: Product) => {
    products.push(data);
  }

  addProduct({
    title: 'Product1',
    createdAt: new Date(1993, 1, 1),
    stock: 12
  });
  addProduct({
    title: 'Product2',
    createdAt: new Date(1993, 1, 1),
    stock: 12,
    size: 'L'
  });
  addProduct({
    title: 'Product3',
    createdAt: new Date(1998, 10, 7),
    stock: 18,
    size: 'M'
  })

  console.log(products);

})();