function qtdImpares(vetor) {

    let contador = 0

    for (i = 0; i < vetor.length; i++) {

        if (vetor[i] % 2 != 0) {
            contador++
        }
    }

    return contador
}

let lista1 = [1, 2, 3, 4, 5]

console.log(qtdImpares(lista1))