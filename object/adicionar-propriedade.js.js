/* Adicionar uma propriedade que permita "ações", para que os clientes que estão cadastrados consigam fazer 
operações bancárias */

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

/* acima criei um campo, mostrando o Saldo do cliente, e em seguida criei uma PROPRIEDADE para o cliente chamada Depositar,
com essa propriedade Depositar, agora podemos adicionar mais valores ao saldo do cliente */
console.log(cliente.Saldo); // 777

// adicionando mais saldo 
cliente.Depositar(23);
console.log(cliente.Saldo); // 800

/* podemos observar que dentro da função usamos this, this é este objeto aqui, está instância de objeto de cliente .saldo 
que é a propriedade que queremos trabalhar, += que é um operador de incremento aqui, então ele vai incrementar, 
saldo o valor da propriedade saldo, com o que estamos recebendo aqui como parâmetro da função.
*/