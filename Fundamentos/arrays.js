const valores = [7,4,9,6,1,8,1,8,61,16,1]
console.log(valores[0], valores[5])

valores[0] = 100000

console.log(valores)
console.log(valores.length)

valores.push({id:3}, false, null, "teste")

console.log(valores)
console.log(valores.length)

console.log(valores.pop())

delete valores[10]

console.log(valores)
console.log(typeof valores)
