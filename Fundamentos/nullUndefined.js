let valor //não inicializada, undefined é o valor padrão pra esses casos
console.log(valor)

//console.log(valor2)  Nesse caso o valor 2 nem foi declarado 

valor = null //O null significa que não tem valor, não aponta para algum espaço na memória
console.log(valor)
// console.log(valor.toString()) O nulo não tem essas funções então dá erro

const produto = {}
console.log(produto.preco) //vai der Undefined, porque o preço não foi definido
console.log(produto)

produto.preco = 3.50
//produto.preco = undefined // Jamais definir algo como undefined

console.log(produto)
produto.preco = null // sem preço 
console.log(!!produto.preco)
console.log(produto)