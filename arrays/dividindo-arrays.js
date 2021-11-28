const nomes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'André',
'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinicius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

// agora preciso dividir esses alunos em duas salas diferentes

/* utilizando o metodo slice, fazemos essa divisão colocando os valores do indice que queremos dividir */

const sala1 = nomes.slice(0, nomes.length / 2); // fez o corte da array de 1 ao 10 - passamos dois parametros 
const sala2 = nomes.slice(nomes.length / 2); /* no caso aqui, ele já começou na metade e foi até o final não precisando 
passar dois parametros */

console.log(`Alunos da sala 1: ${sala1}`); // aqui aparece de João até André
console.log(`Alunos da sala 2: ${sala2}`); // aqui aparece de Carlos até Camilo



