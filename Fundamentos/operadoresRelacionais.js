console.log("01", "01" == 1)  //aqui compara o valor
console.log("02", "01" === 1)  // aqui compara completamente, desde o valor até o tipo.
console.log("03", "03" != 3)  // aqui compara se é diferente, no caso o js reconhece como false, já que a string e o int tem o mesmo valor (3)
console.log("04", "03" !== 3)  // aqui compara se é completamente diferente, desde o valor até o tipo.
console.log("05", 3 < 2)
console.log("06", 3 > 2)
console.log("07", 3 <= 2)
console.log("08", 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)



console.log("09", d1 == d2) // embora os dois tenham valores iguais, eles estão localizados em locais de memória diferente
console.log("10", d1 === d2)
console.log(d1)
console.log(d2)
console.log("11", d1.getTime() == d2.getTime())
console.log("12", d1.getTime() === d2.getTime())

console.log("13", undefined == null) // os dois tem o mesmo valor mas tipo diferente
console.log("14", undefined === null)



