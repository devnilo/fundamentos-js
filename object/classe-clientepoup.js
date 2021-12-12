/* Aproveitar o Cliente que já existe e criar a partir dele um novo tipo de cliente para contas poupanças */

// AGORA USANDO O CLASS E OS METODOS

class Cliente {
    constructor(nome, cpf, email, saldo) {
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.saldo = saldo;
    }

    depositar(valor) {
        this.saldo += valor;
    }

    exibirSaldo() {
        console.log(this.saldo);
    }
}

class ClientePoupanca extends Cliente {
    constructor(nome, cpf, email, saldo, saldoPoup) {
        super (nome, cpf, email, saldo);
        this.saldoPoup = saldoPoup;
    }

    depositarPoup(valor) {
        this.saldoPoup += valor;
    }
}

const Danilo = new ClientePoupanca('Danilo', '777.777.777-77', 'danilo@email.com', 777, 7777);
console.log(Danilo);

Danilo.depositar(77);
Danilo.depositarPoup(77);

console.log(Danilo);