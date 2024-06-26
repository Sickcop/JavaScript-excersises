/*
 * Crea una función que calcule y retorne cuántos días hay entre dos cadenas
 * de texto que representen fechas.
 * - Una cadena de texto que representa una fecha tiene el formato "dd/MM/yyyy".
 * - La función recibirá dos String y retornará un Int.
 * - La diferencia en días será absoluta (no importa el orden de las fechas).
 * - Si una de las dos cadenas de texto no representa una fecha correcta se
 *   lanzará una excepción.
 */

let f1 = '12/12/2024'
let f2 = '12/12/2025'

function contarDias() {
   let dias = f1[2] > f2[2] ? f1[0] : f2[0]
   let meses = Math.abs(f1.split('/')[1] - f2.split('/')[1])
   let anio = Math.abs(f1.split('/')[2] - f2.split('/')[2])

   let resultado = anio * 365.25 + (meses - 1) * (3652.25 / 12) + dias

}

