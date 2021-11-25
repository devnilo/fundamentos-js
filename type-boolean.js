// tipos boleanos são TRUE e FALSE

// comparando numeros
const primeiroNumero = 5;
const segundoNumero = 10;
const terceiroNumero = 5;

// um igual (=) ATRIBUINDO

// dois iguais (==) para fazer uma comparação, digamos assim, pelo valor, só o que está dentro,
// ele converte numa string e compara os dois

// três iguais (===) compararam não só o valor, mas, também o tipo; se é string, se é número, 
// ou os dois têm que ser número para dar true ou os dois têm que ser string para dar true

// abaixo estou comparando o primeiroNumero com segundoNumero usando tres iguais (===)
console.log(primeiroNumero === segundoNumero); // false - como 5 não é igual a 10, então falso
console.log(primeiroNumero === terceiroNumero); // true - 5 é igual a 5, então verdadeiro


// comparando textos
const primeiroTexto = "Danilo";
const segundoTexto = "Araujo";

console.log(primeiroTexto === segundoTexto); // false

// como aprendemos antes, o JavaScript diferencia letras minúsculas com maiúsculas
const nomeUm = "Danilo";
const nomeDois = "danilo";

console.log(nomeUm === nomeDois); // false

// usando .toLowerCase() para deixar o nomeUm todo minúsculo e assim ser igual ao nomeDois
console.log(nomeUm.toLowerCase() === nomeDois); // true