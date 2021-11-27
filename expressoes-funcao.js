// DECLARAÇÃO DE FUNÇÃO (COMO CHAMAMOS NORMALMENTE)

function minhaFuncao(parametro) {
    console.log(parametro)
}

minhaFuncao("Está função está funcionando");

//-------------------------------------------------------------------------------------------------------------------//

// UTILIZANDO EXPRESSÃO DE FUNÇÃO

const soma = function(numero1, numero2) {return numero1 + numero2};
console.log(soma(1, 1));

/* Expressão de função nós não temos um nome da função, realmente. Nós criamos uma variável, 
que é o caso que criamos com const, e atribuiu a nossa função a essa variável.

É importante ser const para não acabarmos colocando um valor dentro dela e apagando a nossa função no meio de código.
*/