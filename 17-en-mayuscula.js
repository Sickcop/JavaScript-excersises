/*
 * Crea una función que reciba un String de cualquier tipo y se encargue de
 * poner en mayúscula la primera letra de cada palabra.
 * - No se pueden utilizar operaciones del lenguaje que
 *   lo resuelvan directamente.
 */

function mayusculo(str) {

  let arr = [...str]
  let outp = arr.map((a,i)=>{
    
    if(i === 0){
      return str[i].toUpperCase()
    }

    else if(str[i - 1] === ' '){
      return a.toUpperCase()
    } 

    else {
      return a
    }

  })
  console.log(outp.join(''))
}

mayusculo('No se pueden utilizar operaciones del lenguaje que')