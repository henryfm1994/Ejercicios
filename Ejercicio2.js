// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

// Para crear un array con los numeros de 3 cifras
const array = () => {
    let numeros = []
    let multiplicacion;
    let dato = 999;
    let arr = [];
    let multiplos = [];

    for (let index = 0; index < 900; index++) {
        numeros[index] = dato;
        dato--;
    }

    numeros.forEach(element => {

        for (let index = 0; index < numeros.length; index++) {
            multiplicacion = (element * numeros[index])

            // Para saber si es palindromo
            let text = multiplicacion.toString()
            let comparar = text.split('').reverse().join('');

            if (comparar === text) {
                arr.push(multiplicacion)
                multiplos.push(element + "x" + numeros[index])
                // console.log(multiplos)
            }
        }

    });
    return Math.max(...arr) + "=" + multiplos[arr.indexOf(Math.max(...arr))]
}
console.log("The largest palindrome made from the product of three 3-digit numbers is", array())
