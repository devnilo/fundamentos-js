const idadeMinimaAlcool = 18;
const idadeCliente = 16;

// COMO SEMPRE USAMOS, E COMO DEVEMOS USAR PARA FICAR MAIS FACIL A LEITURA DO CÓDIGO
if (idadeCliente >= idadeMinimaAlcool) {
    console.log("Você já pode beber alcool!")
} else {
    console.log("Você ainda não tem idade para beber alcool!")
}

// OPERADOR TERNÁRIO, APENAS ENCURTA O CÓDIGO, PORÉM NÃO É RECOMENDADO UTILIZAR
//                    CONDIÇÃO                            TRUE                                   FALSE
console.log(idadeCliente >= idadeMinimaAlcool ? "Você já pode beber alcool!" : "Você ainda não tem idade para beber alcool!");