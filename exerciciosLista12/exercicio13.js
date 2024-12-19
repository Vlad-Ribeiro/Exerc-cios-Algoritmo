function somarImpares(numero) {

    let soma = 0

    for (i = numero - 1; i > 0; i--) {
        if (i % 2 != 0) {
            soma += i
        }
    }

    return soma
}

console.log(somarImpares(6))