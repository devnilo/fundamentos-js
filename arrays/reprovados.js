/* Depois de calcular a média dos alunos, precisamos mostrar que está reprovado entre os alunos */

const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const notas = [7, 4.5, 8, 7.5];

// UTILIZANDO FILTER 
//                            usando 2 parametros no arrow function (necessário abrir parenteses)
const reprovados = alunos.filter((nome, indice) => notas[indice] < 5)
console.log(`Alunos reprovados: ${reprovados}`);