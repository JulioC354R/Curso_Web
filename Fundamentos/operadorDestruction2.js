const a = [10] // definindo um array com um elemento 10

console.log(typeof a)

console.log(a)
/*
Em JavaScript, o operador typeof retorna o tipo de uma variável. Quando você aplica typeof a um array, o resultado é "object". Isso ocorre porque, em JavaScript, arrays são na verdade um tipo especial de objeto.

*/

const [b] = [10] // utilizando o destruction, esse recurso facilita criar multiplas variáveis de uma só vez

const [n1, , , n3, n4, , n6 = 200, , , , , , , , , , ,, ,, ,,,  , , , , n] = [1,5,8,4,4,9,,5484968,"fe",16]

console.log(b)

console.log(n1,n3,n4,n6, n)

//a gente também consegue usar o destruction em estruturas aninhadas


const [, [, nota] ] =  [1,[2,"Nota aqui"],3]

console.log(nota)