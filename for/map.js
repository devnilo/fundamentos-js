/* Um aluno recebeu um ponto extra nas suas notas, adicione esse ponto extra em suas notas */

const notas = [10, 7, 7, 8];

/* 
const notasAtualizadas = notas.map(nota => nota + 1) 

console.log(notasAtualizadas);  [11, 8, 8, 9] - como a nota maxima é 10, não podemos deixar 11, então iremos 
utilizar o metodo de operador ternário 
*/

//                  utilizando arrow function com operador ternário dentro do map
const notasAtualizadas = notas.map(nota => nota == 10 ? nota : ++nota)

console.log(notasAtualizadas); // [10, 8, 8, 9]

/* Eu coloquei nota++. O que ele faz? Ele vai retornar o valor de nota e depois tentar somar um, 
no nosso caso não funciona, temos que primeiro somar um e depois retornar, então colocamos ++nota.
*/

//-----------------------------------------------------------------------------------------------------------------//

// DIFERENÇA DE EACH PRO MAP 

/* O FOR EACH É UM METODO QUE NÃO RETORNA NADA, ELE APENAS EXECUTA O QUE ESTÁ DENTRO DO BLOCO DE CODIGO, NÃO RETORNANDO
NENHUM DADO PARA NOS */

/* JÁ O MAP, TUDO QUE ESTÁ DENTRO DA FUNÇÃO ELE RETORNA */