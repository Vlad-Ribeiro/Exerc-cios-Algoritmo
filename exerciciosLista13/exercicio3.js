function menorValor(vetor) {

    let menor = vetor[0]

    for (i = 0; i < vetor.length; i++) {

        if (vetor[i] < menor) {
            menor = vetor[i]
        }
    }

    return menor
}

let lista1 = [9, 8, 7, 3, 6]

console.log(menorValor(lista1))