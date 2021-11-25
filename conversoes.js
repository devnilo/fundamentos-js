// tipo de dado
// booleanos

const numero = 7;
const numeroString = "7";

// olhar no código type-boolean.js que está explicado a diferença dos iguais (==) (===)
console.log(numero === numeroString); // false
console.log(numero == numeroString); // true

// quando soma uma string com um numero dessa forma ele apenas vai concatenar os dois valores
console.log(numero + numeroString); // 77

// para somar uma string com numero é da forma abaixo usando Number(), ou String()
console.log(numero + Number(numeroString)); // 14