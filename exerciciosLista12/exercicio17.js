function multiplicarCaracter(numero, caracter) {
    let mensagem = ``

    for (i = numero; i > 0; i --) {
        mensagem += `| ${caracter} |`
    }

    return mensagem
}

console.log(multiplicarCaracter(10, '#'))