const listaChamada = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];

// UTILIZANDO o SPLICE (não confundir com SLICE), vamos remover dois alunos e adicionar outro

/* o SPLICE permite que removamos alguns elementos de qualquer lugar dentro do array e coloque novos elementos 
em qualquer lugar dentro desse array também. Ele agora vai pedir três parâmetros. O primeiro parâmetro 
é em qual índice ele vai começar. No caso, a Ana e o Caio que temos que remover. A Ana é o índice número 1, 
lembrando que o array começa no 0.
*/

listaChamada.splice(1, 2, 'Rodrigo');
console.log(listaChamada); // [ 'João', 'Rodrigo', 'Lara', 'Marjorie', 'Leo' ]

/* PRIMEIRO PARAMETRO = INICIO DA REMOÇÃO(OU NÃO REMOÇÃO) - caso não tenha nenhuma remoção ele apenas vai adicionar
o elemento na sua lista na ordem que foi passado seguindo o numero do indice, no exemplo acima foi dado 1 (ANA)

SEGUNDO PARAMETRO = É A QUANTIDADE QUE QUEREMOS REMOVER(OU NÃO REMOÇÃO) apartir do indice que passamos no
primeiro parametro, no caso do exemplo acima, começamos no indice 1 (ANA), e pedimos pra remover 2, entao
foi removido (ANA e CAIO);

TERCEIRO PARAMETRO PRA FRENTE É ADIÇÃO DE NOVOS ELEMENTOS, PODENDO ADICIONAR VARIOS ELEMENTOS - no exemplo acima
adicionei apenas um elemento (RODRIGO), porém podemos adicionar mais. 

LEMBRANDO QUE ESSE NOVO ELEMENTO VAI ENTRAR NO INDICE PASSADO NO PRIMEIRO PARAMETRO - NO CASO O RODRIGO ENTROU NO 
INDICE 1, SE NÃO TIVESSEMOS REMOVIDO NINGUEM ELE IRIA FICAR NO INDICE DA MESMA FORMA. EXEMPLO ABAIXO

['João', 'Rodrigo', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo']; - MANTEMOS ANA E CAIO, E O RODRIGO APARECE NO INDICE 1

*/
