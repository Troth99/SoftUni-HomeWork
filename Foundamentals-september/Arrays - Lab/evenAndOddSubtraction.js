function solve(numbers){

let oddSum = 0
let evenSum = 0

for (let i = 0; i <numbers.length; i++){

    let currentNumber = Number(numbers[i])
    if (currentNumber % 2===0){
        evenSum += currentNumber
    }

    if (currentNumber % 2 !== 0){
        oddSum += currentNumber
    }
    
    
}
let result = evenSum-oddSum
console.log(result);


}

solve([3,5,7,9])