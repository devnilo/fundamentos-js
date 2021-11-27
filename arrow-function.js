// chamando uma função normalmente
function apresentar(nome) {
    return `Meu nome é ${nome}`;
}

// chamando uma arrow function  (=>), LEMBRANDO PARA NÃO CONFUNDIR COM O OPERADOR (MAIOR OU IGUAL >=)
const apresentarArrow = nome => `Meu nome é ${nome}`;
const soma = (numero1, numero2) => numero1 + numero2;

// chamando arrow function com mais de uma linha de instrução, É NECESSÁRIO ABRIR CHAVES COMO MOSTRO ABAIXO
const somaNumerosPequenos = (numero1, numero2) => {
    if (numero1 || numero2 > 10) {
        return "Somente números de 1 ao 9"
    } else {
        return numero1 + numero2;
    }
}