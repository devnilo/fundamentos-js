// buscando nome de um aluno

const alunos = ['João', 'Maria', 'Juliana', 'Caio'];
const mediaAlunos = [10, 7, 9, 6];

// lista de duas dimensões
let listaAlunosEMedias = [alunos, mediaAlunos];

// arrow function
const exibeNomeNota = (nomeDoAluno) => {
    if (listaAlunosEMedias[0].includes(nomeDoAluno)){
        let indice = listaAlunosEMedias[0].indexOf(nomeDoAluno);
        return `${listaAlunosEMedias[0][indice]}, a sua média é ${listaAlunosEMedias[1][indice]}`;
    } else {
        return 'Aluno não está cadastrado';
    }
}

console.log(exibeNomeNota('Caio')) // Caio, a sua média é 6
console.log(exibeNomeNota('Ana')) // Aluno não está cadastrado

/* Uma coisa muito importante, o includes pega um array e faz uma busca pelo que estamos passando, 
ele faz uma busca pelo valor, pelo tipo de dado. Ele está fazendo uma busca por Caio, está indo na array alunos, 
que é a primeira array da nossa array de duas dimensões, então ele está indo no índice 0 dentro de alunos, 
buscando por um valor de dado que seja Caio, que bata com o que passamos para o parâmetro.

O includes sempre vai retornar verdadeiro ou falso. Ele retorna um booleano para nós. O código entra no if caso 
 condição seja verdadeira. Então aqui é verdadeiro porque Caio existe nessa array, ele retornou true, 
 porém outro método que usamos, o indexOf, não retorna booleano, ele retorna um número, que é um número
  referente ao número do índice.
*/

/* O que faz o indexOf? O indexOf vai trazer qual o número do índice também fazendo uma pesquisa por ano.

Ele vai buscar por Caio e vai trazer para nós qual o número do índice onde Caio se localiza nessa array. 
O João está no índice 0, Maria no índice 1, Juliana no índice 2, Caio no índice 3. 
Ele vai retornar 3 e guardar esse valor na variável índice.
*/