/* Verificar a melhor forma de agregar a informação de um novo dependente ao objeto client */

const cliente = {
    Nome: 'Danilo',
    Idade: 24,
    CPF: '777.777.777-77',
    Email: 'daniloaraujo@email.com',
    Contatos: '11 97777-7777',
    Dependentes: [{
        Nome: 'Maressa',
        Idade: 7,
        Parentesco: 'Filha'
    }]
}

/* adicionando novos dependentes, como estamos vendo acima usamos array para o novo campo Dependentes, e ao inves 
de adicionar fora do objeto, vamos adicionar outro dependente utilizando os metodos do array, no caso lembrando, 
para adicionar utilizamos o .push */

cliente.Dependentes.push({
    Nome: 'Goa',
    Idade: 4,
    Parentesco: 'Filha'
})

console.log(cliente); /* 
  Nome: 'Danilo',
  Idade: 24,
  CPF: '777.777.777-77',
  Email: 'daniloaraujo@email.com',
  Contatos: '11 97777-7777',
  Dependentes: [
    { Nome: 'Maressa', Idade: 7, Parentesco: 'Filha' },
    { Nome: 'Goa', Idade: 4, Parentesco: 'Filha' }
  ]
*/

//---------------------------------------------------------------------------------------------------------------//

/* acessando as informações apenas da filha que eu quero utilizando o filter, abaixo usarei a idade para filtrar
pois a idade das duas são diferentes, então o filter guarda as informações da filha que tiver a idade colocado no código */
const filhaMaisNova = cliente.Dependentes.filter(filha => filha.Idade === 4);
const filhaMaisVelha = cliente.Dependentes.filter(filha => filha.Idade === 7);

console.log(filhaMaisVelha); // { Nome: 'Maressa', Idade: 7, Parentesco: 'Filha' }
console.log(filhaMaisNova); // { Nome: 'Goa', Idade: 4, Parentesco: 'Filha' }

// visualizando apenas a idade da filha
console.log(filhaMaisNova[0].Idade); // 4