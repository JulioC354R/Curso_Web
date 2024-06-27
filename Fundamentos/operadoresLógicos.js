function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 //Operador and
    const comprarTv50 = trabalho1 && trabalho2 //Operador Or
    const comprarTb32 = trabalho1 != trabalho2 //Operador Xor
    const manterSaudavel = !comprarSorvete //negação lógica

    return {comprarSorvete,comprarTv50, comprarTb32,manterSaudavel}
}

console.log(compras(trabalho1 = false, trabalho2 = false))
console.log(compras(trabalho1 = true, trabalho2 = true))
console.log(compras(trabalho1 = true, trabalho2 = false))

