var a = 3 
/* tem tem escopo global, não fica guardado dentro de um bloco.
* (uma var consegue ser redeclarada, isso acontece só no JS)
*/

let b = 34
/* tem escopo de bloco, ou seja
 apenas no bloco onde ela foi declarada
 uma tentativa de acesso a uma variável antes de sua declaração resultará em um erro de referência.
 Você não pode redeclarar uma variável usando let no mesmo escopo; isso gerará um erro.

  Ao usar o let ele tem escopo de bloco e caso ao usar a variável ele pode procurar a variável de fora do escopo.
*/

const c = 353
/* Const é um valor constante, ele não vai mudar e dá erro ao atribuir um novo valor nessa variável
* mas ainda é possível criar novas apartir dela
 */

const nova = c +a 

console.log(a)
console.log(b)
console.log(c)
console.log(nova)

