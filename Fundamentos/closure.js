// Closure é o escopo onde a função foi declarada

// O Js sempre dá prioridade a escopo local mas isso depende de onde a função foi declarada


const x = "Global"

function fora() {
    const x = "Local"
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()

console.log(minhaFuncao())