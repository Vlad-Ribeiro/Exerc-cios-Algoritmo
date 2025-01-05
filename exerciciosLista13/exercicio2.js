function maiorValor(vetor) {

    let maior = vetor[0]

    for (i = 0; i < vetor.length; i++) {

        if (vetor[i] > maior) {
            maior = vetor[i]
        }
    }

    return maior
}

let lista1 = [1, 2, 10, 5]

console.log(maiorValor(lista1))