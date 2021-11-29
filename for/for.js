// aprendendo mais sobre o for

const numeros = [100, 200, 300, 400, 500, 600];

// pode utilizar qualquer nome no lugar de 'i'
for (let i = 0; i < numeros.length; i++) {
    console.log(i, numeros[i]); // 0 100, 1 200, 2 300, 3 400, 4 500, 5 600 - foi mostrado o indice, e o valor do indice
}

/* O for é uma estrutura de loop, é um laço de repetição. Toda vez que o Java script e que nosso programa cai 
numa linha que tenha esse for ele vai entrar e vai ficar lá, repetindo e executando o que está sendo pedido dentro 
do bloco, lembrando que um bloco de código no Java script é o que especificamos entre as chaves. 
*/

/* então no código acima, ele sempre repete o console.log se o valor do indice for menor que a quantidade do indice, 
no caso o numeros.length vai ser resultado de 6, e sempre que ele repete ele aumenta o numero do indice por causa do i++,
sendo assim, ele faz a repetição até mostrar o ultimo valor da lista, depois que o numero do indice for maior que 6
o for para de funcionar
*/

/* Porém, quando usamos for para executar códigos em loop, temos que deixar claro qual é a condição de parada do loop. 
Caso contrário, o programa não sabe em que momento deve parar de executar o loop, acaba ficando “preso” 
e entrando em loop infinito.

O loop infinito pode travar seu navegador, o terminal em que o código estiver sendo executado, ou até mesmo o 
computador, então é importante saber como evitá-lo.
*/