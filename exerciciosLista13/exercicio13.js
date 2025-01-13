function compVetorNum(vetor, num) {

    let novoVetor = []

    for (i = 0; i < vetor.length; i++) {

        if (vetor[i] > num) {
            novoVetor.push(vetor[i])
        }
    }

    return novoVetor
}

let lista = [1, 2, 3, 4, 5, 5, 6, 7, 8]

console.log(compVetorNum(lista, 3))