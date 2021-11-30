/* o objeto, ele funciona quando precisamos fazer uma abstração de algo do mundo real por exemplo, então eu tenho 
o cliente, o cliente tem nome, o cliente tem idade, o cliente tem endereço, o cliente tem várias coisas, e precisamos 
organizar essa informação para que ela seja acessada de uma forma coesa
*/

// criando uma estrutura de objeto

const cliente = {
    Nome: 'Danilo',
    Idade: 24,
    CPF: '777.777.777-77',
    Email: 'daniloaraujo@email.com'
}

console.log(`O nome do cliente é ${cliente.Nome}`); // O nome do cliente é Danilo
console.log(`A idade do cliente é ${cliente.Idade}`); // A idade do cliente é 24
console.log(`O número do CPF do cliente é ${cliente.CPF}`); // O número do CPF do cliente é 777.777.777-77
console.log(`O e-mail do cliente é ${cliente.Email}`); // O e-mail do cliente é daniloaraujo@email.com

// utilizando substring para pedir que mostre apenas os primeiros numeros do CPF por segurança
console.log(cliente.CPF.substring(0, 3));
// no caso acima, eu pedi para mostrar do primeiro ao terceiro numero