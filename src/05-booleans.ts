(() => {
  let isEnable = true; // Tipado inferido
  // isEnable = 'as';
  // isEnable = 123;
  isEnable = false;

  let isNew: boolean = false; // Tipado explícito
  console.log(isNew);
  isNew = true;
  console.log(isNew);

  const random = Math.random();
  console.log('random ', random);
  isNew = random >= 0.5;
  console.log(isNew);

  // const myBoolean: Boolean; --> Mala práctica
})();