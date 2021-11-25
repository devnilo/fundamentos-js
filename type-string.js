// toda string que for escrita, precisa se utilizar as "aspas"

// no caso nessas variáveis abaixo, eu utilizei os dois tipos de aspas
const primeiroTexto = "Olá, mundo!";
const segundoTexto = 'Olá, mundo!';


// concatenação (+), a concatenação das strings funciona do mesmo jeito que os números

const fraseNome = "Meu nome é ";
const meuNome = "Danilo";
const fraseFinal = fraseNome + meuNome;

console.log(fraseFinal);
// ------------------------------------------------------------------------------------------------------------------//

// o JavaScript diferencia minúsculas e maiúsculas, tanto nos valores dos dados quanto no código que escrevemos.
const cidade = "belo horizonte";
const input = "Belo Horizonte";

// aqui cidade não é igual input, então será falso (false)
console.log(cidade === input); // false

const cidade = "são paulo";
const input = "São Paulo";

// Abaixo, vemos um dos métodos de string nativos do JavaScript em ação, o toLowerCase()
// que converte todos os caracteres da string informada (no caso, input) para letras minúsculas 
// (se forem algarismos, nada é convertido). 
const inputMinusculo = input.toLowerCase();

// aqui cidade é igual input, então será verdadeiro (true)
console.log(cidade === inputMinusculo); // true
// ------------------------------------------------------------------------------------------------------------------//

// A propriedade length pode ser utilizada para sabermos quantos caracteres uma string contém

const senha = "minhaSenha123"
console.log(senha.length) // 13 caracteres

