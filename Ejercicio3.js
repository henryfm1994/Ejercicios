// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
// What is the 10 001st prime number?

const nprimo = (e) => {
    let arr = []
    let ultimo;
    let num = 2;
    while (arr.length < e) {
        if (primo(num)) {
            arr.push(num)
            num++
        }
        else num++
    }
    return ultimo = arr.pop()
}

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

console.log(nprimo(10001))