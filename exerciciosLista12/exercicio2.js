function verificar(numero) {
    var status = `ímpar`
    
    if (numero % 2 == 0) {
        status = `par`
    }

    return status
}

console.log(verificar(37))
console.log(verificar(80))