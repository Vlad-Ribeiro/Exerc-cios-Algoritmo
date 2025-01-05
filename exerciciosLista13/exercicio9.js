function verificarVetor(vetor, valor) {

    let contador = 0

    for(i = 0; i < vetor.length; i++) {

        if (vetor[i] == valor) {
            contador++
        }
    }

    return contador
}

let lista1 = [1, 2, 3, 4, 5, 5, 6, 7, 5, 8, 5, 5, 5]

console.log(verificarVetor(lista1, 5))