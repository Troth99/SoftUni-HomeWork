function biggestElement(input){

    let biggestElement = Number.NEGATIVE_INFINITY

    for (let i = 0; i < input.length; i++){

        for (const number of input[i]) {
            if (biggestElement <= number){
                biggestElement = number;
            }
        }
      
    }
console.log(biggestElement);
}

biggestElement([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
   )