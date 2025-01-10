function processOddPositions(input){
let result = input.filter((n, i) => i % 2 !== 0).map(n=> n + n).reverse().join(' ')
return result
}


console.log(processOddPositions([3, 0, 10, 4, 7, 3]))