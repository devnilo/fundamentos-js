/* Consultar um objeto utilizando uma lista de chaves relativas a informações de clientes gerada pelo sistema
e printar o resultado da tela
*/

/* nem sempre dá para fixar no código, qual que é a chave que queremos acessar, ao contrário que já fizemos 
no arquivo objetos.js, que sabíamos que as nossas chaves eram nome, idade, CPF, email
*/

const cliente = {
    Nome: 'Danilo',
    Idade: 24,
    CPF: '777.777.777-77',
    Email: 'daniloaraujo@email.com'
}

// anotação de colchetes, usada para passar o valor como variável
const informacoesCliente = ['Nome', 'Idade', 'CPF', 'Email'];
console.log(cliente[informacoesCliente[0]]); // Danilo

// usando o forEach para mostrar todas as informações
informacoesCliente.forEach(info => console.log(cliente[info]));

