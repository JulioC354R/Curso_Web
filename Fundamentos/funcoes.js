console.log(typeof Object)
class Produto{}
console.log(typeof Produto)

// tanto o Objeto quanto uma classe são funções no JS

//Funcao sem retorno
function imprimirSoma(a, b) {
    let resultadoDaSoma = a+b
    console.log(resultadoDaSoma)

}

imprimirSoma(2) // vai dar NotANumber
imprimirSoma(2,5) // vai imprimir certo
imprimirSoma(2,4, 4,6,23,7,3,53,7) // vai levar como entrada apenas a quantidade de dados que a função precisa, no caso apenas 2 entradas são aceitas e processadas, mas não gera erro

//funcao com retorno

function soma(a,b=1) { //passei 1 parametro variável e b é com valor padrão 1
    return a + b
}

console.log(soma(4)) //vai somar com o valor padrão de b, no caso 1
console.log(soma(4,46)) //vai somar certo
console.log(soma()) // Vai dar o erro NotANumber


// Armazenando uma função em uma variável

const imprimirSoma2 = function(a,b){
    console.log(a+b)
}

imprimirSoma2(2,4)

// armazenando uma função arrow em uma variável
const soma2 = (a,b) => {
    return a + b
}
console.log(soma(5,8))

//retorno impícito (aqui tem uma função mais reduzida)
const subtracao = (a,b) => a-b

console.log("aqui é uma arrow function. resultado da subtração: " + subtracao(10,6))

