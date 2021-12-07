/* Percorrer um objeto e extrair informações básicas do cliente em formato mais legível e de forma automatizada para
fornecer a outros departamentos do banco */ 

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

// utilizando o 'for in' iremos fazer essa impressão dos dados mais legível
let relatorio = "";

// abaixo usei o if para não mostrar as outras propriedades sem ser objeto, no caso o depositar
for (let info in cliente) {
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function") {
        continue
    } else {
        relatorio += `
        ${info} = ${cliente[info]}`
    }
}

// agora podemos ver as informações muito mais legíveis
console.log(relatorio); /*         
    Nome = Danilo
    Idade = 24
    CPF = 777.777.777-77
    Email = daniloaraujo@email.com
    Contatos = 11 97777-7777
    Saldo = 777
*/
