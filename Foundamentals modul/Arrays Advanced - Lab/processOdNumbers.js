function processOdNumbers (arr){

let newArr = arr.filter((x, index) => index % 2 !== 0);
let sum = newArr.map(x => x * 2)
let reversed = sum.reverse()

console.log(reversed.join(` `));





}


processOdNumbers([10, 15, 20, 25])