const peso1 = 1.0
const peso2 =  Number("2.0")

console.log(peso1,peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.45452
const avaliacao2 = 7.5753457

const total = avaliacao1 * peso1 + avaliacao2 *peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))
console.log(media.toString(2))
console.log(typeof media)


//Coisas estranhas que acontecem em tipos numéricos

console.log(7 / 0) //retorna infinity
console.log("10" / 2) //faz a divisão mesmo sendo uma string se for um balor numérico

console.log("Show!" * 2) //dá o erro Not A Number
console.log(0.1 + 0.7)
