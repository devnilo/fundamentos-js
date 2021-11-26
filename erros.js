//const numero;         SYNTAX ERROR: Missing initializer in const declaration

// esse erro foi causado por falta de inicializador, que no caso do const é o valor
// então para fixar basta dar um valor ao const
const numero = 7;

// ------------------------------------------------------------------------------------------------------------------//

// console.log(numero       SYNTAX ERROR: missing ) after argument list

// esse erro foi causado por falta de fechamento de parênteses
// então para fixar basta fechar os parênteses
console.log(numero);

// ------------------------------------------------------------------------------------------------------------------//

//console.log(varNaoDeclarada);       REFERENCE ERROR: varNaoDeclarada is not defined

// tentamos rodar uma variável que não existe
// abaixo criarei uma variável com o nome de varNaoDeclarada, e o erro estará resolvido
let varNaoDeclarada = "agora sim";
console.log(varNaoDeclarada);

// ------------------------------------------------------------------------------------------------------------------//

// RangeError: Quando o código recebe um dado do tipo certo, porém não dentro do formato aceitável. 
// Por exemplo, um processamento que só pode ser feito com números inteiros maiores ou iguais a zero, 
// mas recebe -1.

// ReferenceError: Normalmente ocorre quando o código tenta acessar algo que não existe, como uma variável 
// que não foi definida; muitas vezes é causado por erros de digitação ou confusão nos nomes utilizados, 
// mas também pode indicar um erro no programa.

// SyntaxError: Na maior parte dos casos ocorre quando há erros no programa e o JavaScript não consegue executá-lo. 
// Os erros podem ser métodos ou propriedades escritos ou utilizados de forma incorreta, por exemplo, 
// operadores ou sinais gráficos com elementos a menos, como esquecer de fechar chaves ou colchetes.

// TypeError: Indica que o código esperava receber um dado de um determinado tipo, tal qual uma string de texto, 
// mas recebeu outro, como um número, booleano ou null.