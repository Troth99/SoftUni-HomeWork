function solve(arr){

        let leftSum= 0
        let sumToRight = 0
    for (let i = 0; i < arr.length; i++){
       
      sumToRight += arr[i]
    }
      
      for (let i = 0; i< arr.length; i++){

        sumToRight -= arr[i]


        if ( leftSum === sumToRight){
            console.log(i);
            return
        }

        leftSum += arr[i]
      }

  console.log(`no`);
  

}


solve([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])