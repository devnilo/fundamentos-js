const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function mediaSala(notasDaSala)  {
    const somaNotas = notasDaSala.reduce((acumulado, atual) => acumulado + atual, 0);
    return somaNotas / notasDaSala.length;

}

console.log(`Média da sala de JavaScript ${mediaSala(salaJS)}`); // Média da sala de JavaScript 7.5
console.log(`Média da sala de Java ${mediaSala(salaJava)}`); // Média da sala de Java 6.5
console.log(`Média da sala de Python ${mediaSala(salaPython)}`); // Média da sala de Python 7

// RESOLVENDO O PROBLEMA DA PRIMEIRA AULA (media-arrays.js), agora usando o REDUCE

const notas = [10, 7, 7, 8];

const media = notas.reduce((acumulado, atual) => acumulado + atual, 0) / notas.length;
console.log(media); // 8

//--------------------------------------------------------------------------------------------------------------//

/* 
1) O método reduce() está trabalhando com dois parâmetros. O primeiro é a função callback obrigatória para 
retornar o cálculo e o segundo parâmetro é um número que representa o valor inicial - no caso, 0.

2) A função callback foi escrita diretamente dentro do reduce(), e esta função também está recebendo 
dois parâmetros, ambos obrigatórios: O valor acumulado e o valor atual.

3) A função callback foi escrita na forma de arrow function; nesse caso, quando só temos uma linha de 
instrução dentro da função (atual + acum) não precisamos usar chaves e nem da palavra-chave return.
*/

//--------------------------------------------------------------------------------------------------------------//

// OUTRAS FORMAS DE ESCREVER O MESMO CÓDIGO:

// utilizando o function dentro do reduce
/* 
const soma = numeros.reduce(function (acumulado, atual) {
 return acumulado + atual;
}, 0);
*/

// utilizando o function fora do reduce
/*
function operacaoNumerica(acumulado, atual) {
 return atual + acumulado
}

const soma = numeros.reduce(operacaoNumerica, 0)
*/
