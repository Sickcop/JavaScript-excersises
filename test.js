function MCD(a, b) {

  let arrayA = []
  let MCD;

  for(i = 1 ; i <= a ; i++) {
    if(a % i === 0 && b % i === 0) {
      arrayA.push(i)
    }
  }
  console.log(arrayA)

  MCD = Math.max(...arrayA)

  console.log(MCD)
  return MCD
}




