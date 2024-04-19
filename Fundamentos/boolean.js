let isAtivo = false

console.log(isAtivo)

isAtivo = true

console.log(isAtivo)

isAtivo = 1
// o uso de ! antes de um bool é uma expressão de negação lógica
console.log(!isAtivo)

console.log("os verdadeiros...")
// qualquer número é considerado verdadeiro com excessão do 0
console.log(!!3)
console.log(!!-1)
console.log(!!" ")
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))


console.log("os falsos")
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log("para finalizar...")
console.log(!!("" || null || 0 || ' '))

let nome = ""

console.log(nome || "desconhecido")