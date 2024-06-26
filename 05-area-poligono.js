/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */

/*Ingre la opcion 1 para cuadrado o rectangulo y la opcion 2 para triangulo*/

/* En caso de ser un triangulo en el lado */

let resultado;

function calcularPoli(poli, base , altura) {

  if(poli === 1) {

    resultado = base * altura
    poli = 'rectangulo'
  }

  else if(poli === 2) {

    resultado = (base * altura) / 2
    poli = 'triangulo'
  }

  console.log(`el area de su ${poli} es: `+ resultado)
}

calcularPoli(1, 6, 2)