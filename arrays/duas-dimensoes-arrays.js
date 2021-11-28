/* LISTA DE DUAS DIMENSÕES - SEMPRE QUE FOMOS USAR A LISTA DE DUAS DIMENSÕES AUTOMATICAMENTE
PRECISARÁ COLOCAR OS 2 COLCHETES "[][] PARA ACESSAR OS OUTROS ARRAYS"
*/

const alunos = ['Joao', 'Maria', 'Juliana', 'Caio'];
const mediaAlunos = [10, 7, 9, 6];

//                     0 [alunos], 1 [mediaAlunos]
let listaAlunosEMedias = [alunos, mediaAlunos];

console.log(`${listaAlunosEMedias[0][0]}`) /* no console irá mostrar: Joao - o que eu fiz aqui foi passar o 
primeiro parametro da listaAlunosEMedias[0][0], no valor de 0 para entrar primeiro elemento, que no caso é alunos, 
e o  segundo parametro listaAlunosEMedias[0][0], no valor de 0 para dizer que eu quero o primeiro elemento da 
lista alunos, que no caso é o Joao
*/

// continuando o código

console.log(`, sua média é ${listaAlunosEMedias[1][0]}`) /* no console irá mostrar: , sua média é 10 - funciona
da mesma forma que o console acima, porém agora eu pedi no primeiro parametro listaAlunosEMedias[1][0] o valor de 1
que no caso é o segundo elemento (mediaAlunos) da listaAlunosEMedia, e depois no segundo parametro 
listaAlunosEMedias[1][0] coloquei o valor de 0, assim o código vai puxar a primeira nota da mediaAlunos, no caso 10
*/

/* agora vamos ver o código inteiro mostrando a média de todos os alunos, apenas mudando o valor 
dos paremetros da listaAlunosEMedias, seguindo o indice de cada variavel
*/

console.log(`${listaAlunosEMedias[0][0]}, sua média é ${listaAlunosEMedias[1][0]}`) // Joao, sua média é 10
console.log(`${listaAlunosEMedias[0][1]}, sua média é ${listaAlunosEMedias[1][1]}`) // Maria, sua média é 7
console.log(`${listaAlunosEMedias[0][2]}, sua média é ${listaAlunosEMedias[1][2]}`) // Juliana, sua média é 9
console.log(`${listaAlunosEMedias[0][3]}, sua média é ${listaAlunosEMedias[1][3]}`) // Caio, sua média é 6

//------------------------------------------------------------------------------------------------------------------//

/* Outra forma de chamar os arrays de 2 dimensões é matrizes. Matrizes podem ser visualizadas como uma tabela do Excel, 
onde cada campo representa um elemento, e precisamos de uma linha e uma coluna para acessar um campo. 
Então, as linhas são o primeiro colchete e a coluna o segundo colchete.

Arrays têm seu principal uso quando temos uma grande quantidade de informações com propósitos similares, 
como as notas de um aluno. Matrizes, por sua vez, são utilizadas quando precisamos de vários arrays similares ou 
com informações ligadas às outras, como as notas de uma classe com vários alunos.

As matrizes não são limitadas a 2 dimensões, podendo ter mais dimensões, de modo que cada dimensão é representada por 
um colchete. Porém, tome cuidado para não se perder dentro delas, já que se uma matriz passa a ter, 
por exemplo, 4 ou 5 dimensões, se torna bem difícil saber exatamente o que está sendo acessado e começamos 
a ter problemas para fazer a manutenção do código.
*/