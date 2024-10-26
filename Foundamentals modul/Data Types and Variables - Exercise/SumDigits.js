function solve(digits){

let str = digits.toString()
let sum = 0
let element = 0
for (let i = 0; i< str.length; i++){


    let currentElement = str[element++]
    let convertInNumber = +currentElement
    sum += convertInNumber
}
console.log(sum);

}

solve(543)