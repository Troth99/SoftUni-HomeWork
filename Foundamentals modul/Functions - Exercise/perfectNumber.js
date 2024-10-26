function perfectNumber(number) {
   
    function sum(n) {
        let sumOfDivisors = 0
        let divisor = 1
        for (let i = 1; i <= n / 2; i++) {

          
            if (n % i === 0) {

                divisor = i
               sumOfDivisors += divisor
            }

         
        }
        if (sumOfDivisors === number){
            return true
        }
    }

    
    let result = sum(number)
 
    if (result) {
        console.log(`We have a perfect number!`);
    
    }else {
        console.log(`It's not so perfect.`);
        
    }

}


perfectNumber(6)
perfectNumber(28)
perfectNumber(1236498)