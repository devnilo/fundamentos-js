/* Aproveitar o cliente que já existe e criar a partir dele um novo tipo de cliente para contas poupanças */

function cliente(Nome, CPF, Email, Saldo) {
    this.Nome = Nome;
    this.CPF = CPF;
    this.Email = Email;
    this.Saldo = Saldo;

    this.Depositar = function (valor) {
        this.Saldo += valor;
    }
}

function clientePoupanca(Nome, CPF, Email, Saldo, SaldoPoup) {
    cliente.call(this,Nome,CPF,Email,Saldo)
    this.SaldoPoup = SaldoPoup;
}

const Vic = new clientePoupanca('Victória', '888.888.888-88', 'vic@email.com', 888, 8888);
console.log(Vic); /* 

clientePoupanca {
  Nome: 'Victória',
  CPF: '888.888.888-88',
  Email: 'vic@email.com',
  Saldo: '888',
  Depositar: [Function (anonymous)],
  SaldoPoup: '8888'
}

no console acima podemos observar que existe apenas o depositar para o saldo normal, vamos criar uma funçao usando o prototype para adicionar
o depositar para o saldoPoup
*/

// usando o prototype para criar uma nova função depositar dentro do clientePoupanca
clientePoupanca.prototype.DepositarPoup = function (valor) {
    this.SaldoPoup += valor;
}

Vic.DepositarPoup(2222); 
console.log(Vic.SaldoPoup); // 11110