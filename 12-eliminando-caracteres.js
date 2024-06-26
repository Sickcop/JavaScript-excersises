/*
 * Crea una función que reciba dos cadenas como parámetro (str1, str2)
 * e imprima otras dos cadenas como salida (out1, out2).
 * - out1 contendrá todos los caracteres presentes en la str1 pero NO
 *   estén presentes en str2.
 * - out2 contendrá todos los caracteres presentes en la str2 pero NO
 *   estén presentes en str1.
 */


function eliminarCaracteres(str1 , str2) {

  let [...arr1] = str1
  let [...arr2] = str2
  let auxArr
  auxArr = arr1.slice()

  arr1.map((a,index)=>{
    for(j = 0 ; j < arr2.length - 1 ; j ++) {
      if(a === arr2[j]){
        delete(arr1[index])
      }
    }
  })
  arr2.map((a,index)=>{
    for(j = 0 ; j < auxArr.length - 1 ; j ++) {
      if(a === auxArr[j]){
        delete(arr2[index])
      }
    }
  })
  console.log(arr1.join(''))
  console.log(arr2.join(''))
}



eliminarCaracteres('juan' , 'manuel')