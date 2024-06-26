/*
 * Crea un programa que cuente cuantas veces se repite cada palabra
 * y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 * - No se pueden utilizar funciones propias del lenguaje que
 *   lo resuelvan automáticamente.
 */

let texto = 'estoy Estoy aquí para ayudarte en todo lo que necesites. Si requieres alguna modificación en lo presentado en este post, deseas asistencia con tu tarea, proyecto o precisas desarrollar un software a medida, no dudes en contactarme. Estoy comprometido a brindarte el apoyo necesario para que logres tus objetivos.'
let arrPalabras = []
let palabraActual = ''
let aux = 0
let contadorPalabras = 0

const separarPalabras = () =>{

  for(i = 0 ; i < texto.length ; i ++) {
    if(texto[i] !== ' ') {
      if(texto[i] === (',' || '.' || ":" || ';')){
        palabraActual += ''
      } else {
        palabraActual += texto[i].toLowerCase()
      }
      
    } else {
      arrPalabras[aux] = palabraActual
      palabraActual = ''
      aux ++
    }
  }
}

separarPalabras()

for(i = 0 ; i < arrPalabras.length - 1 ; i ++) {
  for(j = 0 ; j < arrPalabras.length - 1 ; j ++) {
    if(arrPalabras[i] === arrPalabras[j]) {
      contadorPalabras ++
    }
  }
  console.log(`${arrPalabras[i]}: ` + contadorPalabras)
  contadorPalabras = 0
}

