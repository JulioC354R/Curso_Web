// Factorys são funções que retornam (ou basicamente criam) objetos dado os parâmetros

function criarPessoa(nome = "Ana", sobrenome = "Maria") {
    return{
        nome: nome,
        sobrenome: sobrenome
    }
}

console.log(criarPessoa("Julio", "Herculano"))


class Pessoa {
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa("João")

p1.falar()

function Pessoa2 (nome){
    this.falar = function(){
        console.log(`Meu nome é ${nome}`)
    }
}

const p2 = new Pessoa2("Maria")

p2.falar()