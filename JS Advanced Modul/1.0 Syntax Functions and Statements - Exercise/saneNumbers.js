function sane(numbers){
let isSame = true;
let numbersAsStr= numbers.toString();
let sum = 0;
for (let i = 0; i <numbersAsStr.length; i++){
 
    sum += Number(numbersAsStr[i])
    if (i > 0 && numbersAsStr[i] !== numbersAsStr[i - 1]){
        isSame = false;
    }


}

console.log(isSame);
console.log(sum);


}

sane(1234)