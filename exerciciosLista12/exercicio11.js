function verificar(numero) {
    numero = Number(numero)

    let mensagem = ``

    if (numero % 2 == 0) {
        mensagem = `${numero} é par`
    } else {
        mensagem = `${numero} é impar`
    }

    if (numero < 0) {
        mensagem += ` e negativo`
    } else {
        mensagem += ` e postivo`
    }

    return mensagem
}

console.log(verificar(2))