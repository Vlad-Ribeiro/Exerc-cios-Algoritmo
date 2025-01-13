function semDuplicatas(vetor) {

    let novoVetor = []

    for (i = 0; i < vetor.length; i++) {

        if (novoVetor.includes(vetor[i])) {

        } else {
            novoVetor.push(vetor[i])
        }
    }

    return novoVetor
}

let lista = [1, 1, 2, 2, 3, 3]

console.log(semDuplicatas(lista))