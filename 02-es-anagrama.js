/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

const prompt = require('prompt-sync')();
let [...p1] = prompt('Ingresa la primera palabra: ');
let [...p2] = prompt('Ingresa la segunda palabra: ');

function orderArray(a) {

  let aux;

  for(i = 0 ; i < a.length ; i ++) {

    for(j = 0 ; j < a.length - 1 ; j ++) {

      if(a[j + 1].codePointAt(0) < a[j].codePointAt(0)) {

        aux = a[j + 1]
        a[j + 1] = a[j]
        a[j] = aux

      }
    }
  }  

  return a

}

function defineAnagrama() {

  orderArray(p1).toString() === orderArray(p2).toString() ? console.log(true) : console.log(false)

}

defineAnagrama()












