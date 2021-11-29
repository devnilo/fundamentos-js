/* O termo callback se refere à função que é “chamada de volta” dentro de outra função. Após o lançamento 
do ES6 (também conhecido como JavaScript 2015) o uso desse tipo de método foi se consolidando, então é importante 
entender como utilizá-lo.
*/

/* Vamos continuar trabalhando com call-back e forEach por enquanto que é um método que já vimos e que 
vamos conseguir trabalhar talvez um pouco melhor em cima dele
*/

const nomes = ['Danilo', 'Vic', 'Gabriel', 'Epitácio'];

nomes.forEach(imprimeNomes)

function imprimeNomes(nome) {
    console.log(nome) //  Danilo Vic Gabriel Epitácio
}

/* diferente do que fizemos no arquivo media-foreach.js, aqui usamos a function mesmo e chamamos ela fora do forEach,
isso por que não tem problema desde que você chame uma função para o forEach */

/* Uma coisa importante, funções como foreach não vão funcionar, por exemplo, se nós simplesmente escrevermos 
algum código que não seja uma função, nós não conseguimos, por exemplo, passar para dentro dessa função um nome, 
ou passar simplesmente a array
*/

/* essas funções como foreach é obrigatório colocarmos uma parametro nele, porém o forEach também aceita um 
segundo parâmetro que é o índice, o segundo parametro é opcional, não sendo obrigatório
*/