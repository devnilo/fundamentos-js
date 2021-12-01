/* Há duas formas de acessar o valor de propriedade de um objeto no JavaScript e podemos usar qualquer uma delas. */

const colecionador = {
    Nome: "João do Gibi",
    Idade: 7,
    TipoColecao: ["Gibi"],
    Email: "joaogibi@email.com",
   }

   console.log(colecionador.Nome) // João do Gibi
   console.log(colecionador["Nome"]) // João do Gibi

/* Na primeira forma utilizamos a notação de ponto, muito comum em linguagens como Java e C. No segundo exemplo, 
acessamos usando os colchetes, de modo similar a acessar um array indexado por uma string. No JavaScript, 
objetos são classificados também como um array associativo (map ou dicionário). */

//------------------------------------------------------------------------------------------------------------------//

/* Nesta linguagem as propriedades são expressas como strings e podem ser manipuladas em tempo de execução, 
o que confere uma flexibilidade muito grande na hora de escrever código . Vamos adicionar dinamicamente uma série 
de tipos de quadrinhos à lista de tipos do objeto colecionador. Adicione ao objeto a função abaixo:
*/

const segundoColecionador = {
    Nome: "Jumento",
    Idade: 777,
    TipoColecao: ["Mangá"],
    Email: "jumento@email.com",
    adicionarTipoColecao: function(propriedade,tipo) {
        this[propriedade].push(tipo)
    }
}

for(i = 0; i < 3; i++) {
    segundoColecionador.adicionarTipoColecao("TipoColecao", "Revista Pornô" +i)
}

console.log(segundoColecionador);