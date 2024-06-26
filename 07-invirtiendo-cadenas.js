/*
 * Crea un programa que invierta el orden de una cadena de texto
 * sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */

let [...cadena] = 'Hola mundo' 
let cadenaInvert = []
let contador = 0

for(i = cadena.length - 1; i >= 0 ; i--) {
  cadenaInvert[contador] = cadena[i]
  contador ++
}

console.log(cadenaInvert.join(''))
