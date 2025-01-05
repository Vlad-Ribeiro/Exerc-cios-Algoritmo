function paresVetor(vetor) {

    let vetorPares = []

    for (i = 0; i < vetor.length; i++) {

        if (vetor[i] % 2 == 0) {
            vetorPares.push(vetor[i])
        }
    }

    return vetorPares
}

let lista1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(paresVetor(lista1))