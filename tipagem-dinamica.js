// tipagem dinâmica
// no javascript é possivel reatribuir uma variavel, não só o valor como o tipo de dado, seja boolean, number, string

// abaixo vou criar uma variavel com um tipo de dado number e logo depois vou mudar para string
let minhaVar = 7;

// aqui a variavel já não é mais 7, e sim uma string chamada texto
minhaVar = "texto";

// posso mudar quantas vezes eu quiser, basta chamar ela novamente e reatribuir
minhaVar = true;

// quando eu pedir pro console mostrar o que tem na minha variavel minhaVar, o resultado será a ultima reatribuição
console.log(minhaVar); // no caso true

// O fato do JavaScript aceitar isso faz com que ele seja uma linguagem de programação de tipagem dinâmica.