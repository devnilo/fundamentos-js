/* Gerar uma função que permita a criação de novos clientes a partir de um modelo */

function cliente(Nome, CPF, Email, Saldo) {
    this.Nome = Nome;
    this.CPF = CPF;
    this.Email = Email;
    this.Saldo = Saldo;

    this.Depositar = function (valor) {
        this.Saldo += valor;
    }
}

const Danilo = new cliente('Danilo', '777.777.777-77', 'danilo@email.com', 777);
const Victoria = new cliente('Victória', '888.888.888-88', 'vic@email.com', 888);

console.log(Danilo); /*
cliente {
    Nome: 'Danilo',
    CPF: '777.777.777-77',
    Email: 'danilo@email.com',
    Saldo: 777,
    
*/

console.log(Victoria); /* 
cliente {
  Nome: 'Victória',
  CPF: '888.888.888-88',
  Email: 'vic@email.com',
  Saldo: 888,
  Depositar: [Function (anonymous)]
}

*/