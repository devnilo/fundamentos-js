// Quando o JavaScript começa a ser executado, ele vai ler todo o seu programa, vai achar todas as variáveis que são 
// do tipo var e vai carregar elas primeiro. Então, podemos começar a usar elas antes de declarar. 
// Essa é uma vantagem da var.

var altura = 5;
var comprimento = 7;

area = altura * comprimento;
console.log(area);

var area;

// Porém, isso pode causar algumas complicações. Porque podemos, por exemplo, acabar usando mesmo nome de variável 
// em duas partes, acabar não nos atentando a isso e vamos ter problemas. 
// O que podemos fazer para resolver isso? Podemos usar a let.

//--------------------------------------------------------------------------------------------------------------------//

let formaLet = 'retângulo';
let alturaLet = 5;
let comprimentoLet = 7;
let areaLet;

if (formaLet == 'retângulo') {
    areaLet = alturaLet * comprimentoLet;
} else {
    areaLet = alturaLet * comprimentoLet / 2;
}

console.log(areaLet);

// Nós vimos que conseguimos usar o let, mas, por que não usamos o var e deixamos como estava antes?
// Por que? Porque dentro do nosso programa temos vários blocos de código e esses blocos são definidos pelas chaves. 
// Como é, por exemplo, o caso do if.

// E não é interessante nós termos uma variável que consigamos mexer no valor dela dentro dos blocos. 
// Não, pelo menos, com certo controle, já que o var é muito solto dentro do nosso programa e podemos acabar reutilizando
// o nome dessa variável em alguns outros locais, dentro de outros blocos de código. Por segurança, é bom mantermos 
// como let.

// O que fizemos é; o let, na verdade, vai conseguir acessar o bloco de código.

// A let é um pouco mais solta. Nós conseguimos fazer mais reatribuições, ela aceita que mudemos os valores, 
// do que a terceira forma, o terceiro tipo de variável que existe no JavaScript, que é a const.

//--------------------------------------------------------------------------------------------------------------------//

// A const é uma constante. Ou seja, uma vez que a colocamos no programa, não conseguimos alterá-la.
// Vamos fazer esse programa utilizando const em alguns locais, que é para manter a nossa aplicação concisa. 
// Ou seja, impedir que, durante a execução da aplicação, alguém coloque uma linha que mude o valor de uma variável 
// que estamos trabalhando em cima. Protegendo, assim, o fluxo de trabalho da nossa aplicação.

const formaConst = 'quadrado';
const altura = 5;
const comprimento = 7;

// diferente de var e let, a const precisa de uma atribuição
// const areaConst; - então aqui está errado, e eu terei que usar let novamente
let areaConst;

if (formaConst == 'quadrado') {
    areaConst = altura * comprimento;
} else {
    areaConst = altura * comprimento / 2;
}

console.log(areaConst);

// E acabamos de ver como conseguimos utilizar tanto a var, que não é muito recomendada de se utilizar, hoje em dia, 
// por ela ser muito solta; a let, que nos permite trocar os valores dela, porém, nós sempre temos que 
// declarar ela antes de ser utilizada; e a const que é fixa, o valor dela, uma vez declarado, fica preso nela 
// e também tem que ser declarado antes.