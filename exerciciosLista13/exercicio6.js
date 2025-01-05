function imparesVetor(vetor) {

    let impares = []

    for (i = 0; i < vetor.length; i++) {

        if (vetor[i] % 2 != 0) {
            impares.push(vetor[i])
        }
    }

    return impares
}

let lista1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(imparesVetor(lista1))