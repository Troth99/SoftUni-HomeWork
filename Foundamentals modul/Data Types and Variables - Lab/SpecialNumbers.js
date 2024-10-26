function solve(n){


for (let i = 1; i <= n; i++){
let num = i
let sum = 0
let str= ``

while(num > 0){
 sum += num % 10

 num = parseInt(num / 10)

 }

let isSpecial = (sum === 5 || sum === 7 || sum === 11) ? 'True' : 'False'

console.log(`${i} -> ${isSpecial}`);


}


}

solve(15)