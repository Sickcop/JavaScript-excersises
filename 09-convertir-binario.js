/*
 * Crea un programa se encargue de transformar un número
 * decimal a binario sin utilizar funciones propias del lenguaje que lo hagan directamente.
 */
let n = 600
let arr = []

for(i = n ; i >= 1 ; i = Math.floor(i / 2)) {
  arr.unshift(Math.floor(i % 2))
}

console.log(arr.join(''))