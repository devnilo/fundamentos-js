// parâmetros de função

function soma(numero1, numero2) {
    return numero1 + numero2;
}

console.log(soma(2, 2)); // 4
console.log(soma(4500, 2)); // 4502
console.log(soma(3.50, 2)); // 5.5

function multiplica(numero1, numero2) {
    return numero1 * numero2;
}

// abaixo eu fiz uma multiplicação, porém usei a função soma dentro da multiplica
//                           9           6
console.log(multiplica(soma(4, 5), soma(3, 3))) // 54

console.log(multiplica(soma(4, 5), 5)); // 45
console.log(multiplica(5, soma(4, 5))); // 45

//------------------------------------------------------------------------------------------------------------------//

// ordem dos parâmetros

function nomeIdade(nome, idade) {
    return `Meu nome é ${nome} e minha idade é ${idade}`;
}

// ORDEM ERRADA - sempre seguir a ordem que você colocou dentro da função
console.log(nomeIdade(24, "Danilo")) // no caso a frase aqui foi "Meu nome é 24 e minha idade é Danilo"

// agora seguindo de forma correta
console.log(nomeIdade("Danilo", 24)); // Meu nome é Danilo e minha idade é 24

