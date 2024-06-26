/*
 * Escribe una función que reciba un texto y retorne verdadero o
 * falso (Boolean) según sean o no palíndromos.
 * Un Palíndromo es una palabra o expresión que es igual si se lee
  * de izquierda a derecha que de derecha a izquierda.
 * NO se tienen en cuenta los espacios, signos de puntuación y tildes.
 * Ejemplo: Ana lleva al oso la avellana.
 */
let arr = []

function definePalindromo(str) {

  str = str.toLowerCase()

  for(letra of str) {
    if(letra !== ' ') {
      arr.push(letra)
    }
  }

  let contador = arr.length - 1

  for(letra of arr) {

    if(letra !== arr[contador]) {
      return console.log('no es palindromo')
    }
    contador --
  }

  console.log('es palindromo')
}

definePalindromo('Ana lleva al oso la avellana')