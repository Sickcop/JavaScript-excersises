/*
 * Crea un programa que comprueba si los paréntesis, llaves y corchetes
 * de una expresión están equilibrados.
 * - Equilibrado significa que estos delimitadores se abren y cierran
 *   en orden y de forma correcta.
 * - Paréntesis, llaves y corchetes son igual de prioritarios.
 *   No hay uno más importante que otro.
 * - Expresión balanceada: { [ a * ( c + d ) ] - 5 }
 * - Expresión no balanceada: { a * ( c + d ) ] - 5 }
 */

const [...arr] =  ' { [ a * ( c + d ) ] - 5 }'

let newArr = []

for(caracter of arr) {
  if(caracter === '{'|| caracter === '}'|| caracter ===  '(' || caracter ===  ')'|| caracter === '[' || caracter === ']') {
    newArr.push(caracter)
  }
}

let newArrSize = newArr.length - 1
let aux = newArrSize

function definirEcuacion() {

  if((newArrSize + 1) % 2 !== 0) {
    return console.log('la ecuacion no esta balanceada')
  }

  else if((newArrSize + 1) % 2 === 0) {
    for(i = 0 ; i <= newArrSize / 2 ; i ++ ) {

      if(newArr[i] === '[') {
        if(newArr[aux] !== ']'){
          return console.log('la ecuacion no esta balanceada')
        }
      }
      else if(newArr[i] === '{') {
        if(newArr[aux] !== '}'){
          return console.log('la ecuacion no esta balanceada')
        }
      }
      else if(newArr[i] === '(') {
        if(newArr[aux] !== ')'){
          return console.log('la ecuacion no esta balanceada')
        }
      }
      aux --
    }
    return console.log('la ecuacion si esta balanceada')
  }
}

definirEcuacion()

