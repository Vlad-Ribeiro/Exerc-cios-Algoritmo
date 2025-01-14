function haDuplicatas(vetor) {

    let estado = false

    let vetorDeLeitura = []

    for (i = 0; i < vetor.length; i++) {

        if (!vetorDeLeitura.includes(vetor[i])) {
            vetorDeLeitura.push(vetor[i])
        } else {
            estado = true
            break
        }
    }

    return estado
}

let lista = [1, 2, 2, 3, 4, 5]

console.log(haDuplicatas(lista))