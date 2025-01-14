function maioresDoVetor(vetor, num) {

    let maiores = []

    for (i = 0; i < num; i++) {
        let maiorValor = -Infinity

        for (j = 0; j < vetor.length; j++) {
            if (vetor[j] > maiorValor && !maiores.includes(vetor[j])) {
                maiorValor = vetor[j];
            }
        }

        maiores.push(maiorValor)
    }

    return maiores
}

let lista = [31, 40, 32, 30, 12, -5, -20, -12, 41]

console.log(maioresDoVetor(lista, 5))