/*
 * Escribe un !Hola Mundo! en todos los lenguajes de programación que puedas.
 * Seguro que hay algún lenguaje que te llama la atención y nunca has utilizado,
 * o quizás quieres dar tus primeros pasos... ¡Pues este es el momento!
 *
 * A ver quién se atreve con uno de esos lenguajes que no solemos ver por ahí...
 */

function amstrongNumber(n) {

  let total = 0
  let n2 = n
  n = [...n.toString()].map(a => Math.pow(a , 4))
  n.forEach(a => total += a)
  
  total === n2 ? console.log(`${n2} es un numero de Amstrong!`) : console.log(`${n2} no es un numero de Amstrong :(`)
  
}

amstrongNumber(9474)