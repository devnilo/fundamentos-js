// boolean
const usuarioLogado = true;
const contaPaga = false;

// truthy or falsy
// em algumas linguagens o 0 significa false, e o 1 true
// 0 => false
// 1 => true

console.log(0 == false); // true
console.log(1 == true); // true

console.log("" == false); // true - aspas vazias também são consideradas false

//-------------------------------------------------------------------------------------------------------------------//

// undefined
// quando iniciamos uma variável com o let e deixa ela sem valor nenhum, ela ganha, automaticamente, 
// pelo JavaScript o valor de undefined. Ou seja, ela não foi definida, mas, ela pode ser utilizada.
let minhaVar; // undefined

// null ==> vazio ou nada

let varNull = null; // null

let numero = 3;
let texto = "Jumento";

// typeof é uma palavra chave que serve para perguntarmos ao JavaScript qual é o tipo de dado que está sendo 
// guardado nessa variável.
console.log(typeof numero); // number
console.log(typeof texto); // string

console.log(typeof minhaVar); // undefined

// quando o null foi criado, ele foi dado como um objeto e não null, para não quebrar muitos códigos existentes, ele
// foi deixado dessa forma, como object
console.log(typeof varNull); // object 

