// é como um dict em python, tem a mesma definição

const prod1 = {}
// é assim que se adiciona novas chaves e valores dentro de um objeto
prod1.nome = "Celular ultra mega"
prod1.preco = 4999.99
prod1["Desconto legal"] = 0.40   // evitar atributos com espaco

console.log(prod1)

// Eu posso declarar os atributos de um objeto como se estivesse criando um json
const prod2 = {
    nome: "Camisa Polo",
    preco: 79.90,
    obj:{
        blalbalba:1
    }
}

console.log(prod2)

// Lembre-se Json é texto e uma representação de dados, já o Objeto tem seus atributos e pode ter funções.