// criando um objeto utilizando class (apartir de agora usaremos esse metodo)

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

const Danilo = new Cliente('Danilo', '777.777.777-77', 'danilo@email.com', 777);

Danilo.exibirSaldo();
console.log(Danilo);