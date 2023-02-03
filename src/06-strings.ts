(() => {
  let productTitle = 'My Amazing Product';
  // productTitle = null; -> No se le puede cambiar el tipo
  productTitle = 'My Amazing Product Change';
  console.log(productTitle);

  const productDescription = "ajksdajhkdasjksd";
  console.log(productDescription);

  let productPrice = 100;
  let isNew = true;

  const summary = `
    title: ${productTitle}
    description: ${productDescription}
    price: ${productPrice}
    isNew: ${isNew}
  `;

  console.log(summary);

  const myString: string = 'holi';
  
})();