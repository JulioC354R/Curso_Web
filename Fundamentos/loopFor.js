for (var i = 0; i<10; i++){
    console.log(i)
}

/*Sintaxe do for:
    for (declarar var; condição; incremento) {
        bloco de código
    }

    O i nesse caso vai ser acessado mesmo fora do escopo
*/


// Utilizando o let

for (let a = 0; a<10; a++){
    console.log(a)
}
//   console.log(a)

/*
Ao utilizar o let, quando tento acessar o I do lado de fora não consigo.
*/

const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function (){
        console.log(i)
    })
}
console.log("-------------------------------")
funcs[2]()
funcs[8]()

// Utilizando let

const funcs2 = []

for (let b = 0; b < 10; b++) {
    funcs2.push(function (){
        console.log(b)
    })
}
console.log("-------------------------------")
funcs2[2]()
funcs2[8]()