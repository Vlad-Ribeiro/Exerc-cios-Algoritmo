function verificarOrdem(vetor) {

    let index1 = 0
    let index2 = 1

    for (i = 0; i < vetor.length; i++) {

        if (vetor[index1] < vetor[index2]) {
            index1++
            index2++

            if (index2 >= vetor.length) {
                break
            }

        } else {
            return false
        }
    }

    return true
}

let lista = [10, 11, 12, 13, 14, 15]

console.log(verificarOrdem(lista))