function vetorInverso (vetor) {

    let novoVetor = []

    for (i = vetor.length -1; i >= 0; i--) {
        novoVetor.push(vetor[i])
    }

    return novoVetor
}

let lista = [1, 2, 3, 4, 5]

console.log(vetorInverso(lista))