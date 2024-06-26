/*
 * Escribe una función que calcule y retorne el factorial de un número dado
 * de forma recursiva.
 */

function calcularFactorial(n) {

  if(n === 0){
    return 1
  } else {
    return calcularFactorial((n - 1)) * n
  }
}

console.log(calcularFactorial(5))

