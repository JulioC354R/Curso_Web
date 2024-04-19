const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(2))
console.log(escola.charCodeAt(3))
console.log(escola.indexOf("r"))
console.log(escola.substring(1))
console.log(escola.substring(0,3))

console.log("Escola ".concat(escola).concat("!"))
console.log("Escola " + escola + "!")

console.log(escola.replace("3", "e"))

console.log("Ana, Pedro, Maria".split(","))

const nome = "Julio"

// O template deve ser feito entre crases e ele considera todos os detalhes
// que estiverem nessa string, como quebra de linhas e etc.
const template = `
Olá
${nome}
lalala!`

console.log(template)


const up = texto => texto.toUpperCase()

console.log(`Ei... ${up("cuidado")} !!!`)


