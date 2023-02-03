(() => {

  //El any no debería utilizarse
  let myDynamicVar: any;
  myDynamicVar = 100;
  myDynamicVar = 'holi';
  myDynamicVar = true;

  myDynamicVar = 'Hola';
  const rta = (myDynamicVar as String).toLowerCase();

  myDynamicVar = 1234;
  const rta2 = (<number>myDynamicVar).toFixed();
  console.log(rta2);
  

})();