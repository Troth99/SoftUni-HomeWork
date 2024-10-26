function sum(number){

    let oddSum = 0
    let evenSum = 0

    let arr = [number].toString()
    let separatedNumbers = arr.split(``)

    for (let i = 0; i< separatedNumbers.length; i++){
        let currentNumb = separatedNumbers[i]
        currentNumb = Number(currentNumb)
        if (currentNumb % 2===0){
            evenSum += currentNumb
        }else {
            oddSum += currentNumb
        }
    }

console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);


}




sum(3495892137259234);
