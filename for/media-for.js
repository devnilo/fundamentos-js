// utilizando for para calcular médias

const notas = [10, 7, 7, 8];
let somaNotas = 0;

/* ao invés de usar (somaNotas = somaNotas + um valor, vou usar o somaNotas +=, 
que ele vai fazer essa parte do somar ela própria sozinho */
for (let i = 0; i < notas.length; i++) {
    somaNotas += notas[i];
}

let media = somaNotas / notas.length;
console.log(media); // 8

/* O que o for está fazendo nesse contexto? Estamos pedindo para cada uma das iterações do loop acessar a variável 
somaNotas que nós declaramos com um valor inicial de 0 fora do loop. Isso é muito importante quando trabalhamos com for,
com loops de repetição, entender que tudo que nós colocamos dentro do bloco do for é feito todas as vezes 
que é passado pelo loop, então não poderíamos, por exemplo, criar essa variável soma das notas dentro do for.

Se criarmos dentro do for, toda vez que nós passarmos por ele vamos criar uma nova variável e descartar
o valor da variável antiga.
*/

// ----------------------------------------------------------------------------------------------------------------- //

/* Agora, se quisermos percorrer matrizes, um único for não será suficiente. Mas podemos usar o for várias vezes, 
uma para cada dimensão da matriz. Assim, uma matriz de duas dimensões usará dois for, um dentro do outro.
*/

const notas1 = [10, 6.5, 8 ,7.5];
const notas2 = [9, 6, 6];
const notas3 = [8.5, 9.5];

const notasGerais = [notas1,notas2,notas3];

let segundaMedia = 0;

for (let primeiroIndice = 0; primeiroIndice < notasGerais.length; primeiroIndice++) {
  for (let segundoIndice = 0; segundoIndice < notasGerais[primeiroIndice].length; segundoIndice++) {
    segundaMedia += notasGerais[primeiroIndice][segundoIndice]/notasGerais[primeiroIndice].length;
  }
}

segundaMedia = segundaMedia/notasGerais.length;

console.log(segundaMedia); // 8

/* Vamos entender um pouco melhor as partes que compõem esse código.

No primeiro for criamos uma let primeiroIndice e vamos executar o bloco de código enquanto primeiroIndice for 
menor que notasGerais.length. Como temos 3 elementos (nesse caso, arrays), o primeiro for será executado 3 vezes, 
com primeiroIndice=0, primeiroIndice=1, primeiroIndice=2.

O segundo for tem uma nova variável, a let segundoIndice, já que não podemos usar uma nova let primeiroIndice porque 
ela já está definida, e vamos executá-lo enquanto segundoIndice for menor que notasGerais[primeiroIndice].length. 
Como cada notasGerais[primeiroIndice] é um array, podemos obter a propriedade de tamanho dele utilizando o .length.

O código dentro do segundo for vai acumular o valor de notasGerais[primeiroIndice][segundoIndice], lembrando que 
notasGerais[primeiroIndice] é um dos 3 arrays iniciais. Assim, o parâmetro [segundoIndice] vai acessar o elemento 
dentro array escolhido pelo notasGerais[primeiroIndice], retornando um número que podemos usar na nossa conta.
*/