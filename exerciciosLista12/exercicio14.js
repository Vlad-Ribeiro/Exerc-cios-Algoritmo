function comparar3(a, b, c) {

    if (a > b && a > c) {
        return a
    }

    if (b > a && b > c) {
        return b
    }

    if (c > a && c > b) {
        return c
    }
}

console.log(comparar3(7, 9, 8))