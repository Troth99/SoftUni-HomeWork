function smallestTwoNumbers(arr){
arr.sort((a,b) => a - b)
let smallestTwoNumber = []
smallestTwoNumber.push(arr[0], arr[1])
console.log(smallestTwoNumber.join(' '));

}

smallestTwoNumbers([3, 0, 10, 4, 7, 3])