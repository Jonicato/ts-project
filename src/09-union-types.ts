(() => {
  let userId: string | number;
  userId = 1212;
  userId = 'holi';

  function greeting(myText: string | number) {
    if(typeof myText === 'string') {
      console.log(`string: ${myText.toLowerCase()}`);
    } else {
      console.log(`string: ${myText.toFixed(1)}`);
    }
  }
  greeting(1234.1234);
  greeting('Jonicato')
})();