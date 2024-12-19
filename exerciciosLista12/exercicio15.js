function multiplo(n1, n2) {
    if (n2 % n1 == 0) {
        return `O número ${n1} é múltiplo de ${n2}`
    } else {
        return `Não é múltiplo`
    }
}

console.log(multiplo(5, 8))