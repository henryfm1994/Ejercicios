// The prime factors of 13195 are 5, 7, 13 and 29. What is the largest prime factor of the number 600851475143

// Para saber los divisores del numero
const divisors = (num) => {
    let div = []
    for (let index = 0; index <= num; index++) {
        if (num % index === 0) {
            div.push(index)
        }
    }
    return div;
}

// Para saber si es primo
const primo = (e) => {
    let pr = []
    if (e === 1) {
        return false
    }
    else {
        for (let index = 2; index < e; index++) {
            if (e % index === 0) {
                pr.push(index)
            }
        }
    }
    if (pr.length === 0)
        return true
    else return false
}

// Para buscar los primos en el array de los divisores y devolver el mayor de ellos
const arrayPrimo = (i) => {
    let primos = i.filter(j => primo(j))
    let mayorPrimo = primos.pop()
    return mayorPrimo
}

// console.log((divisors(90)))
// console.log(primo(90))
console.log(arrayPrimo(divisors(13195)))