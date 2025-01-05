function positivoNegativo(vetor) {

    for (i = 0; i < vetor.length; i++) {

        if (vetor[i] < 0) {
            return false
        } else {
            return true
        }
    }
}

let lista1 = [1, 2, 3, 4, 5]
let lista2 = [1, 2, 3, -6, 10]

console.log(positivoNegativo(lista1))
console.log(positivoNegativo(lista2))