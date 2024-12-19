function numeroPrimo(numero) {
    let contador = 0

    for (i = 1; i <= numero; i++) {
        if (numero % i == 0) {
            contador++
        }
    }

    if (contador == 2) {
        return `${numero} é um número primo`
    } else {
        return `${numero} não é um número primo`
    }
}

console.log(numeroPrimo(11))