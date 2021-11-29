// metodo forEach
// o único parâmetro obrigatório que temos que fornecer para esse método: uma função que recebe um elemento

const notas = [10, 7, 7, 8];

let somaNotas = 0;

//              arrow function
notas.forEach(nota => {
    somaNotas += nota
})

let media = somaNotas / notas.length;
console.log(media); // 8 

/* acima usei o metodo arrow function para facilitar a digitação do código, mas eu poderia 
ter utilizado o function normal, ficaria assim:

notas.forEach(function(nota) {
    somaNotas += nota;
})

let media = somaNotas / notas.length;
console.log(media); 
*/

