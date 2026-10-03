function tribonacci(signature,n){
  
  let cal =
     (signature) => {

  
    while(signature.length < 3){
      signature.unshift(0)
    }


    let start = 0
    while( signature.length != n){
      signature.push(signature[start]+signature[start+1]+signature[start+2])
      start++
    }

    return signature

  }

  let count = 0 
  let sum = (num) => count+=num
  signature.forEach(sum)

  return n <= 0 ||  count == 0 ? 0 : cal(signature)
}



// [1, 1 ,1, 3, 5, 9, 17, 31, ...]