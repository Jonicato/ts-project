(() => {

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const login = (data: {email: string, password: number}) => {
    console.log(data.email, data.password);
  }

  // login('jonicato@jonicato.com', '12121212');
  login(
    {
      email: 'jonicato@cato.com',
      password: 1234
    }
  );

  const products: any[] = [];

  const addProduct = (data: {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }) => {
    products.push(data);
  }

  addProduct({
    title: 'Product1',
    createdAt: new Date(1993, 1, 1),
    stock: 12
  });
  addProduct({
    title: 'Product1',
    createdAt: new Date(1993, 1, 1),
    stock: 12,
    size: 'L'
  });

  console.log(products);

})();