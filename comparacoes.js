// == (comparação implícita)

// basicamente usando dois iguais (==), ele vai fazer uma comparação implícita, no caso,
// comparando apenas do valor

const numero = 7;
const texto = "7";

// como usamos a comparação implícita, abaixo podemos ver que o resultado foi true, que o number 7, 
// é igual a string 7, isso por que ele não compara os tipos de dados
console.log(numero == texto); // true

// ------------------------------------------------------------------------------------------------------------------//

// === (comparação explícita)

// se utilizarmos os tres iguais (===), ele vai fazer uma comparação explícita, no caso,
// comparando não só o valor, como os tipos de dados

// como o tipo number não é igual ao tipo string, então false
console.log(numero === texto); // false

// ------------------------------------------------------------------------------------------------------------------//

// conversão explícita
// o recomendado é sempre usar a camparação explícita (===), para não acontecer bugs no seu programa
// mas caso use a comparação implícita (==), podemos fazer a conversão usando esses dois comandos abaixo

Number()
String()

// usando o comando de conversao, agora a string com o valor de 7, virou um number com valor de 7
// caso o valor de texto fosse "7a", irá aparecer NaN, pois não podemos fazer
// conversao de texto, no caso o "a" é um texto junto com o 7
console.log(numero === Number(texto)); // true