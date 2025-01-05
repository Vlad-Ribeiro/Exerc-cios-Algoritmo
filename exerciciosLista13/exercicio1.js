function somarVetor(vetor) {
    
    let somas = 0

    for(i = 0; i < vetor.length; i++) {
        somas += vetor[i]
    }

    return somas
}

let lista1 = [1, 2, 3, 4, 5]
let lista2 = [6, 7, 8, 9, 10]
let lista3 = [1, 1, 1, 1, 1]

console.log(somarVetor(lista1))
console.log(somarVetor(lista2))
console.log(somarVetor(lista3))