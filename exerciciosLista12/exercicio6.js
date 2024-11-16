function verificar(numero) {
    var status = `Não divisível por 3`

    if (numero % 3 == 0) {
        status = `Divisível por 3`
    }

    return status
}

console.log(verificar(9))
console.log(verificar(5))