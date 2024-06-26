/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */


function definePrimeNumber(n) {

  let value = true

  for(i = 2 ; i < n ; i ++) {

    if ( n % i === 0 ) {

      value = false
    }
  }
  console.log(value)
}

definePrimeNumber(11)