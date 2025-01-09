function negativePositiveNumbers(arr){

    let result = []
    for (const element of arr) {
        if (element >= 0){
            result.push(element);
        }else if (element < 0){
            result.unshift(element)
        }
    }
   for (const number of result) {
     console.log(`${number}`);
   }
    
}

negativePositiveNumbers([3, -2, 0, -1])