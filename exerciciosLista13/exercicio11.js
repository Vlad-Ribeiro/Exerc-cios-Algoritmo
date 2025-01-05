function somarIndex(vetor1, vetor2) {

    let novoVetor = []

    for (i = 0; i < vetor1.length; i++) {

        novoVetor.push(vetor1[i] + vetor2[i])
    }

    return novoVetor
}

let lista1 = [1, 2, 3]
let lista2 = [4, 5, 6]

console.log(somarIndex(lista1, lista2))