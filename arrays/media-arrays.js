/* arrays é uma lista ordenada de valores enumerados em que cada valor é chamado de elemento, e cada elemento 
se localiza numa posição na lista chamada de índice.
*/

// trabalhando sem array
// se tivessem mais de um aluno para fazer a media das notas, teriamos que criar dezenas de variavéis

let nota1 = 10;
let nota2 = 7;
let nota3 = 7;
let nota4 = 8;

let media = (nota1 + nota2 + nota3 + nota4) / 4;
console.log(media);

// utilizando arrays

const notasArray = [10, 7, 7, 8];
let mediaArray = (notasArray[0] + notasArray[1] + notasArray[2] + notasArray[3]) / notasArray.length;

console.log(mediaArray);
