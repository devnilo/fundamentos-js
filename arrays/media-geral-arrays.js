const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function mediaSala(notasDaSala)  {
    const somaNotas = notasDaSala.reduce((acumulador, atual) => acumulador + atual, 0);
    return somaNotas / notasDaSala.length;

}

console.log(`Média da sala de JavaScript ${mediaSala(salaJS)}`); // Média da sala de JavaScript 7.5
console.log(`Média da sala de Java ${mediaSala(salaJava)}`); // Média da sala de Java 6.5
console.log(`Média da sala de Python ${mediaSala(salaPython)}`); // Média da sala de Python 7

// RESOLVENDO O PROBLEMA DA PRIMEIRA AULA (media-arrays.js), agora usando o REDUCE

const notas = [10, 7, 7, 8];

const media = notas.reduce((acumulador, atual) => acumulador + atual, 0) / notas.length;
console.log(media); // 8


