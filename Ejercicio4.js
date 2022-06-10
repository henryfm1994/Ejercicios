// The sum of the squares of the first ten natural numbers is,
// The square of the sum of the first ten natural numbers is,
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is .
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

const sum = (e) => {
    let suma = 0
    for (let index = 1; index <= e; index++) {
        suma = suma + (Math.pow(index, 2))
    }
    return suma
}

console.log("The sum of the squares of the first ten natural numbers is", sum(10))

const square = (e) => {
    // let cuadrado = 0
    let suma = 0
    for (let index = 1; index <= e; index++) {
        suma = suma + index
    }
    return Math.pow(suma, 2)
}

console.log("The square of the sum of the first ten natural numbers is", square(10))

const differenceSumSquare = (e) => {
    return sum(e) - square(e)
}

console.log("The difference between the sum of the squares of the first ten natural numbers and the square of the sum is", differenceSumSquare(10))

console.log("The difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.", differenceSumSquare(100))