function qtdVogais(palavra) {
    palavra = palavra.toLowerCase()

    var contador = 0

    var vogais = ['a', 'e', 'i', 'o', 'u']

    for (i = 0; i < palavra.length; i++) {
        for (j = 0; j < vogais.length; j++) {
            if (palavra[i].includes(vogais[j])) {
                contador++
            }
        }
    }

    return frase = `Quantidade de vogais: ${contador}`
}

console.log(qtdVogais('palavra'))
console.log(qtdVogais('quadrado'))