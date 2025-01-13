function maioresDoVetor(vetor, num) {

    let novoVetor = []

    let menorValor = vetor[0]
    let maiorValor = vetor[0]

    for (i = 0; i < vetor.length; i++) {

        if (vetor[i] > maiorValor) {
            maiorValor = vetor[i]
        }

        if (vetor[i] < menorValor) {
            menorValor = vetor[i]
        }
    }

    console.log(menorValor, maiorValor)
}

let lista = [31, 40, 32, 30, 12, -5, -20, -12]

console.log(maioresDoVetor(lista, 3))