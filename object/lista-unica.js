/* Extrair de uma listagem de clientes apenas as informações de dependentes e montar uma lista unica, para
analise de outros departamentos do banco */

const clientes = [{
    Nome: 'Danilo',
    Idade: 24,
    CPF: '777.777.777-77',
    Email: 'daniloaraujo@email.com',
    Contatos: '11 97777-7777',
    Dependentes: [{
        Nome: 'Maressa',
        Idade: 7,
        Parentesco: 'Filha'
    },
    {
        Nome: 'Goa',
        Idade: 4,
        Parentesco: 'Filha'
    }],
},
    {
    Nome: 'Victória',
    Idade: 17,
    CPF: '888.888.888-88',
    Email: 'vicsantos@email.com',
    Contatos: '11 98888-8888',
    Dependentes: [{
        Nome: 'Maressa',
        Idade: 7,
        Parentesco: 'Filha'
    },
    {
        Nome: 'Goa',
        Idade: 4,
        Parentesco: 'Filha'
    }],
}]

// utilizando o operador de espalhamento (...)
const listaDependentes = [...clientes[0].Dependentes, ...clientes[1].Dependentes];
console.log(listaDependentes); /*
[
  { Nome: 'Maressa', Idade: 7, Parentesco: 'Filha' },
  { Nome: 'Goa', Idade: 4, Parentesco: 'Filha' },
  { Nome: 'Maressa', Idade: 7, Parentesco: 'Filha' },
  { Nome: 'Goa', Idade: 4, Parentesco: 'Filha' }
]
*/

/* o operador de espalhamento serve para retirar os elementos de um array, e coloca eles literalmente espalhados 
dentro de um unico array

Vale notar que, caso a sintaxe de espalhamento seja usada em objetos que tenham chaves/propriedades com o
mesmo nome, o JavaScript vai sobrescrever o valor destas propriedades à medida que encontra novos valores 
com o mesmo nome de chave. */