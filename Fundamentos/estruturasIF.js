function soNotaBoa(nota){
    if(nota >= 7){
        console.log("aprovado com " + nota)
    }
}

soNotaBoa(9)
soNotaBoa(4)

function seForVerdade(bool){
    if(bool){
        console.log("O "+ bool + " É verdade!!")
    }
}

seForVerdade(true)
seForVerdade(false)
seForVerdade(-1)
seForVerdade(null)
seForVerdade(NaN)
seForVerdade("?")
seForVerdade({})


function teste(num){
    if (num>0) 
        console.log("funciona mesmo sem as chaves")

}

teste(1)

function teste2(num){
    if (num>0) ;{
        console.log("bloco de codigo ficou separado pelo ;, assim não funcionando o IF")
    }

}

teste2(3)
teste2(-5)


function imprimirResultado(nota){
    if(nota>7){
        console.log("Aprovado")
    }
    else if(nota<7 && nota > 5){
        console.log("vai pra recuperação")
    }
    else{
        console.log("Sem salvação")
    }
}


imprimirResultado(10)
imprimirResultado(9)
imprimirResultado(5)
imprimirResultado(0)
imprimirResultado("aqui não vai dar erro por conta do else")