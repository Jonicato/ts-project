(() => {
  let prices = [1, 2, 3, 4, 5];
  // prices.push('ajksdjksa');
  // prices.push(true);
  prices.push(123);
  prices = [1, 2, 3, 4];

  let products = [1, 'holi', true]; // TS infiere que solo acepta strings y booleans
  // products.push(1234);

  let mixed: (string | number | boolean | Object)[] = ['hola', true, 1234];
  // mixed.push({});
  // mixed.push([]);

  let numbers = [1, 2, 3, 4]
  numbers.map(item => item * 2);
})();