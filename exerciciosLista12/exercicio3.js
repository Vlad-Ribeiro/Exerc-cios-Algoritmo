function verificar(numero) {
    var status = `positivo`

    if (numero < 0) {
        status = `negativo`
    }

    if (numero == 0) {
        status = `zero`
    }

    return status
}

console.log(verificar(10))
console.log(verificar(-1))
console.log(verificar(0))