function solve(numbers){

    let sum = 0
for (let i = 0; i< numbers.length; i++){

    let currentNumber = Number(numbers[i])

    if (currentNumber % 2===0){
        sum += currentNumber
    }
    
}

console.log(sum);



}


solve(['2','4','6','8','10'])