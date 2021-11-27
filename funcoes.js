/* Função sem retorno e sem parâmetro: A função abaixo apenas executa uma instrução, sem a necessidade de 
disponibilizar o resultado para o restante do código. */
function cumprimentar() {
    console.log(`Oi gente!`);
}
cumprimentar(); // Oi gente!

//------------------------------------------------------------------------------------------------------------------//

/* Função sem retorno, com parâmetro: similar à anterior, porém agora a função recebe, via parâmetro, o nome da pessoa 
a ser cumprimentada. Dessa forma é possível reaproveitar a função para que funcione de maneira parecida com o 
nome de qualquer pessoa (desde que esteja no formato de dado string. */
function cumprimentaPessoa(pessoa) {
    console.log(`Oi, ${pessoa}!`);
}
cumprimentaPessoa('Victória') // Oi, Victória!

//------------------------------------------------------------------------------------------------------------------//

/* Função com retorno, sem parâmetro: É possível combinar funções para que cada uma controle apenas uma parte do 
código e elas trabalhem juntas.

No caso abaixo, a função cumprimentar() não precisa receber nenhum parâmetro. Mas logo abaixo vemos que ela está sendo 
utilizada para montar uma string na função cumprimentaPessoa(nomePessoa). Isso significa que a string ”Oi gente!” 
deve estar disponível para outras partes do programa - ou seja, deve ser retornada com o uso da palavra-chave return.
*/

function cumprimento(){
    return 'Oi gente!'
   }
   
function meuCumprimento(nomePessoa) {
    console.log(`${cumprimento()} Meu nome é ${nomePessoa}`)
}
   
meuCumprimento('Danilo') // Oi gente! Meu nome é Danilo

//------------------------------------------------------------------------------------------------------------------//

/* Função com return e mais de um parâmetro: Lembrando que as funções podem receber a quantidade de parâmetros 
necessária, e que o JavaScript identifica os parâmetros pela ordem! Ou seja, no exemplo abaixo o parâmetro 
numero1 se refere a 15, o parâmetro numero2 se refere a 30 e o parâmetro numero3 se refere a 45. Somos nós, que 
estamos desenvolvendo o código, que damos os nomes aos parâmetros de acordo com o dado que a função espera receber 
- no caso, números.
*/

function operacaoMatematica(numero1, numero2, numero3) {
    return numero1 + numero2 + numero3
   }
   
operacaoMatematica(15, 30, 45) // 90

//------------------------------------------------------------------------------------------------------------------//

// declaração de função
function imprimeTexto(texto) {
    console.log(texto);
}

// é possivel executar a função (1 ou mais vezes)
imprimeTexto("Oi, meu nome é Danilo");
imprimeTexto("Tenho 24 anos");

//------------------------------------------------------------------------------------------------------------------// 

// outra forma de chamar a função
function soma() {
    return 2 + 2;
}

console.log(soma());

//------------------------------------------------------------------------------------------------------------------//

 /* As funções ajudam muito no desenvolvimento de um código, pois colaboram para a separação de trechos de 
 código com funções específicas, tornando-o menor e mais legível, O JavaScript nos oferece algumas funções prontas, 
 como é o caso de funções matemáticas (Math em inglês), alguns exemplos são:

Math.round(): Faz o arredondamento (round em inglês) de um número de ponto flutuante para o inteiro mais próximo.
Math.round(4.3) retorna 4
Math.round(3.85) retorna 4
Math.round(2.5) retorna 3, quando o número termina com 0.5 a função arredonda para cima

Math.ceil(): Faz o arredondamento para o valor mais alto, também conhecido como teto (ceil em inglês).
Math.ceil(5.2) retorna 6

Math.floor(): Faz o arredondamento para o valor mais baixo, também conhecido como piso (floor em inglês).
Math.floor(5.2) retorna 5

Math.trunc() : Desconsidera os números decimais, o que é conhecido como truncamento.
Math.trunc(4.3) retorna 4
Math.trunc(4.8) retorna 4

Math.pow() : Faz a exponenciação de 2 números, quando for simples, como ao quadrado(2) ou cubo(3). 
Recomenda-se usar a multiplicação por ser mais rápido.
Math.pow(4 , 2) retorna 4^2 = 16
Math.pow(2.5 , 1.5) retorna 2.5^(3/2) = 3.9528 ...

Math.sqrt() : Retorna a raiz quadrada de um número.
Math.sqrt(64) retorna 8

Math.min(): Retorna o menor valor entre os argumentos.
Math.min(0, 150, 30, 20, -8, -200) retorna -200

Math.max(): Retorna o maior valor entre os argumentos.
Math.max(0, 150, 30, 20, -8, -200) retorna 150

Math.random(): Retorna um valor randômico (random em inglês) entre 0 e 1, então não teremos um valor esperado 
para receber.
Math.random() retorna 0.7456916270759015
Math.random() retorna 0.15449802102729304
Math.random() retorna 0.4214269561951203 */