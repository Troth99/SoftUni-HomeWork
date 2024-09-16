function pyramid(input){

    let n = Number(input[0])

    let current = 1
    let isBigger = false
    let logTheLine = ' '
    for (let rowsOfNumbers = 1; rowsOfNumbers <= n; rowsOfNumbers++){

        for (let colums = 1; colums <= rowsOfNumbers; colums++){

            if (current > n){
                isBigger = true
                break;
            }

            logTheLine += current + " "
            current++
        }
        console.log(logTheLine);
        logTheLine = ' ';
        if (isBigger){
            break;
        }
        
        
    }



}

pyramid(['7'])