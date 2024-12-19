function fatorial(numero) {
    let resultado = 1

    for (i = numero; i > 0; i--) {
        resultado *= i
    }

    return resultado
}

console.log(fatorial(6))