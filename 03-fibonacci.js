/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */

 let a = 0
 let b = 1
 let c = 0

console.log(a)
console.log(b)

 for(let i = 2 ; i < 51 ; i ++) {

    c = a + b
    a = b
    b = c

    console.log(c + ' ' + i)

 }