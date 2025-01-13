function summingElements(firstNum, lastNum){
firstNum = Number(firstNum);
lastNum = Number(lastNum);
let sum = 0;
for (let i = firstNum; i <= lastNum; i++){
sum += i;
}
console.log(sum);
}

summingElements('1', '5' )