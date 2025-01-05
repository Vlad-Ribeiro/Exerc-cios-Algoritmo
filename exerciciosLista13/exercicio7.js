function qtdPares(vetor) {

    let contador = 0

    for (i = 0; i < vetor.length; i++) {

        if (vetor[i] % 2 == 0) {
            contador++
        }
    }

    return contador
}

let lista1 = [1, 2, 3 , 4, 5, 6, 7, 8, 9, 10]

console.log(qtdPares(lista1))