// aqui temos 2 salas diferentes, e eu quero juntar essas salas
const salaPython = ['Danilo', 'Victória', 'Junior'];
const salaJavaScript = ['Henrique', 'Tayane', 'Breno'];

// utilizando o metodo concat vamos juntar essas duas salas

const novaSala = salaPython.concat(salaJavaScript);
console.log(novaSala); // [ 'Danilo', 'Victória', 'Junior', 'Henrique', 'Tayane', 'Breno' ]

/* concat() é um método útil quando não se deseja alterar o array original, e sim fazer uma cópia alterada. 
Caso isso não seja necessário, considere utilizar push() ou splice() para inserir novos elementos ou fazer alterações 
no array original.
*/