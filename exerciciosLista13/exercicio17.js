function negativosDoVetor(vetor) {

    let contadorNegativos = 0

    for (i = 0; i < vetor.length; i++) {

        if (vetor[i] < 0) {
            contadorNegativos++
        }
    }

    return `O vetor selecionado possuí ${contadorNegativos} números negativos.`
}

let lista = [-3, -2, -1, 0, 1, 2, 3]
let lista2 = [1, 2, 3]

console.log(negativosDoVetor(lista2))