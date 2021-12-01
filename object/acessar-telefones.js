/* Acessar a lista de número de telefone das pessoas cadastradas no sistema e imprimi-la, verificando
se há mais de um número em algum cadastro */

const cliente = {
    Nome: 'Danilo',
    Idade: 24,
    CPF: '777.777.777-77',
    Email: 'daniloaraujo@email.com',
    Contatos: ['11 97777-7777', '11 98888-8888']
}

cliente.Contatos.forEach(telefone => console.log(telefone)); // 11 97777-7777 11 98888-8888

/* podemos concluir que podemos trabalhar com os tipos primitivos de dados, então trabalhamos com string, 
a idade é um número, mas nós também podemos ter como valores de chaves arrays. 

E ao invés de colocar dois campos no objeto igual abaixo:
Contato1: '11 97777-7777'
Contato2: '11 98888-8888'

Utilizamos o array dentro da estrutura do objeto para facilitar
*/
