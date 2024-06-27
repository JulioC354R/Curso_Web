const pessoa = {
    nome: "Iguinho",
    idade: 700,
    sobrenome: "Pereira",
    conta: {
        ag: 824,
        numero: 21352352
    }
}
console.log(pessoa)

const {nome, idade} = pessoa //aqui pegamos os itens de pessoa pra usarmos como variável, pessoa continua com os itens

console.log(nome, idade)

console.log(pessoa)

const {nome:n, idade:i} = pessoa // aqui pegamos os mesmos itens porém trocamos os nomes das variáveis

console.log(n, i)

const {sobrenome: s, endereço:e = "rua das flores"} = pessoa

console.log(s, e)    // quando não tem o endereço dentro de pessoa, o JS retorna Undefined

//podemos definir o valor padrão, no caso de endereço, porém isso não adiciona o endereço ao obj

console.log(pessoa)

const {conta:{ag, numero}} = pessoa

console.log(ag,numero)

const {objAninhado:{naoExiste}} = pessoa //ao tentar pegar um objeto aninhado que não existe gera erro

console.log(naoExiste)
