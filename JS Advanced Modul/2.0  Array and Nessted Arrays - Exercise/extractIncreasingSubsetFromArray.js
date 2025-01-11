function extractingSubset(input){

const result = [];
let biggestNumber = 0
for (let i = 0; i < input.length; i++){
    let currentNumber = input[i];

    if (currentNumber >= biggestNumber){
        result.push(currentNumber)
        biggestNumber = currentNumber
    }  
}
return result

}

console.log(extractingSubset([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    ))