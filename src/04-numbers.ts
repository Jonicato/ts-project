(() => {
  let myNumber = 30;
// myNumber = myNumber + "5"; INCORRECTO

let myNumber2: number = 30;
myNumber2 += myNumber;

let productInStock: number; // Así se declaran variables sin inicializar, ya que TS no puede inferirlo

// Conversión de números string a number
let discount: number = parseInt("123");

let numero: string = "100";
let numeroNuevo: number;
numeroNuevo = parseInt(numero); // Solo funciona con números que no empiecen con 0, de lo contrario saldrá un NaN

// let numeroPrueba: string = parseInt("palabra");

//Binarios: se definen colocando "0b" al inicio del valor
let primerBinario = 0b1010; //CORRECTO
// let segundobinario = 0b1210; INCORRECTO. El 2 es inválido

//Hexadecimales: se definen colocando "0x" al inicio del valor
let primerHexa = 0xfff; //CORRECTO
// let segundoHexa = 0xffz; INCORRECTO. El "z" es inválido

// En consola, los hexadecimales y binarios serán convertidos en decimal

// Los tipos de las variables deben escribirse siempre en minúsculas, de lo contrario serían Objetos
let myNumber3: number = 20; // Buena practica.
// let otherNumber: Number = 20; --> Mala practica.

})();

