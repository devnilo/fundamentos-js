// tipo Number

const meuNumero = 7;

const primeiroNumero = 1;
const segundoNumero = 2;

// os simbolos matematicos para se utilizar nas operações são ("+", "-", "*", "/")
const operacaoMatematica = primeiroNumero + segundoNumero;

console.log(operacaoMatematica);

// ponto FLUTUANTE
const numeroPontoFlutuante = 3.3;
const pontoFlutuanteSemZero = .5;

const novaOperacao = numeroPontoFlutuante + pontoFlutuanteSemZero;

console.log(novaOperacao);

// NaN = Not a Number (não é um número)
const alura = "alura";

// no console irá aparecer NaN pois não é possivel realizar uma operação matematica usando uma string + numero
console.log(alura+primeiroNumero);
