function mediaVetor(vetor) {

    let soma = 0

    for (i = 0; i < vetor.length; i++) {
        soma += vetor[i]
    }

    let media = soma / vetor.length

    return media
}

let lista1 = [6, 8, 10, 3]

console.log(mediaVetor(lista1))