/* Precisamos padronizar a lista de alunos para conter apenas letras maiusculas */

let nomes = ['Danilo ARAUJO', 'Vic santos', 'jõao Maria'];

const nomesAtualizados = nomes.map(nome => nome.toUpperCase());
console.log(nomesAtualizados); // [ 'DANILO ARAUJO', 'VIC SANTOS', 'JÕAO MARIA' ]

/* Então, o que vimos aqui? Estávamos trabalhando com números, agora estamos trabalhando com strings. 
O importante é que o map vai percorrer os índices da array, não importa se é um array de números, um array de string, 
e passamos aqui dentro da função o que queremos que seja feito.
*/