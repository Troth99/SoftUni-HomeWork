function solve(binary){

let str = binary.toString()
let decimal = 0

let arr = [binary].toString()

for (let i = 0; i < arr.length; i++){

    let currentElement = str[i]

    let convertCurrent = Number(currentElement)
    decimal = (decimal * 2) + convertCurrent
    
    
    
}

console.log(decimal);
}


solve(11110000)