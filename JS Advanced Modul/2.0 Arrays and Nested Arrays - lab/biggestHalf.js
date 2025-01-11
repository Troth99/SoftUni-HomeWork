function biggestHalf(input){
let sortedNumbers = input.sort((a,b )=> a - b)
let selection = sortedNumbers.filter((i, index) => index >= Math.floor(sortedNumbers.length / 2))
return selection


}

console.log(biggestHalf([3, 19, 14, 7, 2, 19, 6]))