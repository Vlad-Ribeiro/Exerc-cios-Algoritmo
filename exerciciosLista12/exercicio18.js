function comparar(n1, n2) {

    n1 = Math.abs(n1)
    n2 = Math.abs(n2)

    if (n1 - n2 < 5 && n1 - n2 > 0) {
        return 'Próximos'
    } else {
        return `Não próximos`
    }

}

console.log(comparar(-8, -5))