const nome = "Danilo";
const idade = 24;
const cidadeNatal = "São Paulo";

const apresentacaoNormal = "Meu nome é " + nome + ", tenho " + idade + " anos" + ", e nasci em " + cidadeNatal;
console.log(apresentacaoNormal); // Meu nome é Danilo, tenho 24 anos, e nasci em São Paulo


// USANDO O ACENTO GRAVE COMO INICIO DE CHAVE, E USANDO ${} PODEMOS FACILITAR A DIGITAÇÃO DO CÓDIGO
// ISSO É TEMPLATE STRING
// ISSO AQUI É MUITO BOM MALUCO, USAREI SEMPRE
const apresentacaoTemplate = `Meu nome é ${nome}, tenho ${idade} anos, e nasci em ${cidadeNatal}`;
console.log(apresentacaoTemplate); // Meu nome é Danilo, tenho 24 anos, e nasci em São Paulo


