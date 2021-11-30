/* Já vimos o principal, que é acessar, alterar e adicionar valores em um objeto. Mas ainda faltou falarmos 
sobre um caso: E quando queremos deletar um conjunto de chave/valor?
*/

const objetoPersonagem = {
    Nome: 'DZK',
    Classe: 'Druid',
    Nivel: '777',
    Guild: 'Last Choice',
    Servidor: 'Eldera'
}

console.log(objetoPersonagem); // { Nome: 'DZK', Classe: 'Druid', Nivel: '777', Guild: 'Last Choice', Servidor: 'Eldera' }

// usando o operador delete
delete objetoPersonagem.Guild; // removido o campo 'Guild'

// se dermos um console.log agora
console.log(objetoPersonagem); // { Nome: 'DZK', Classe: 'Druid', Nivel: '777', Servidor: 'Eldera' }

//-------------------------------------------------------------------------------------------------------------------//

/* O valor de retorno do operador delete é um booleano, ou seja, retorna sempre true ou false para cada operação. 
Porém, é importante notar que ele não retorna false se tentarmos remover, por exemplo, uma propriedade 
que não existe no objeto:

const delProp = delete objPersonagem.aliado
const delPropInexistente = delete objPersonagem["endereco"]

console.log(delProp) //true
console.log(delPropInexistente) //true
*/

/* O operador delete não remove propriedades herdadas de outro objeto, e aí sim, neste caso, retornará false 
se tentarmos fazer isso. Vamos entender melhor o tema “heranças” mais adiante
*/