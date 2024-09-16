function sum (input){

    let index = 0
let totalNumbs = Number(input[index++])
let sum = 0

for (let i = 1; i <= totalNumbs; i++){

    let currentNum = Number(input[index])
    index++

    sum += currentNum

}

let avg = sum / totalNumbs

console.log(avg.toFixed(2));




}

sum([`2`,`6`,`4`])