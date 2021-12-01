/* Adicionar dependentes para um dos clientes cadastrados, com nome, idade e parentesco */

const cliente = {
    Nome: 'Danilo',
    Idade: 24,
    CPF: '777.777.777-77',
    Email: 'daniloaraujo@email.com',
    Contatos: '11 97777-7777'
}

// criando um objeto dentro de um objeto
cliente.Dependentes = {
    Nome: 'Maressa',
    Idade: 7,
    Parentesco: 'Filha'
}

console.log(cliente); /*
    Nome: 'Danilo',
    Idade: 24,
    CPF: '777.777.777-77',
    Email: 'daniloaraujo@email.com',
    Contatos: '11 97777-7777',
    Dependentes: { Nome: 'Maressa', Idade: 7, Parentesco: 'Filha' } */

// -------------------------------------------------------------------------------------------------------------- //

// podemos alterar o valor do objeto que acabamos de adicionar
cliente.Dependentes.Nome = 'Maressa Araujo';
console.log(cliente); /* 
    Nome: 'Danilo',
    Idade: 24,
    CPF: '777.777.777-77',
    Email: 'daniloaraujo@email.com',
    Contatos: '11 97777-7777',
    Dependentes: { Nome: 'Maressa Araujo', Idade: 7, Parentesco: 'Filha' } */

