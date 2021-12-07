/* Percorrer um objeto, verificar se existe a chave 'Dependentes' e, caso exista, enviar uma mensagem
de oferta de seguro */

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
    },
    {
        Nome: 'Goa',
        Idade: 4,
        Parentesco: 'Filha'
    }],
    Saldo: 777,
    Depositar: function(valor) {
        this.Saldo += valor;
    }
}
/* 
vamos usar um método que é o Object.keys, que ele vai criar um array com todas as chaves do objeto 
abaixo mostra que quando demos um console ele mostra todas as chaves que existe dentro do objeto cliente

const propsClientes = Object.keys(cliente)
console.log(propsClientes);
  'Nome',
  'Idade',
  'CPF',
  'Email',
  'Contatos',
  'Dependentes',
  'Saldo',
  'Depositar'
*/

// seguindo o desafio agora, fizemos uma função para orefere o seguro caso o cliente tenha Dependentes
function oferecerSeguro(objeto) {
    const propsClientes = Object.keys(objeto);
    if (propsClientes.includes('Dependentes')) {
        console.log(`Temos uma oferta de seguro para você ${objeto.Nome}`);
    }
}

oferecerSeguro(cliente);

/* criamos o if e utilizamos o .includes para ver se dentro do objeto cliente exista a chave Dependentes, e
caso o cliente tenha Dependentes imprimimos a mensagem de oferta para ele */

//----------------------------------------------------------------------------------------------------------------//

/* CASO QUISERMOS BUSCAR OS VALORES E NÃO AS CHAVES, utilizamos o Object.value */