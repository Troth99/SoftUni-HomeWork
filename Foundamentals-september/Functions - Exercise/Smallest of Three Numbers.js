function smallestOfTheThree(num1, num2, num3){

let result = 0
if (num1 <= num2 && num1 <= num3) result = num1;
if (num2 <= num1 && num2 <= num3) result = num2
if (num3 <= num1 && num3 <= num2) result = num3

return result

}

console.log(smallestOfTheThree(2,5,3));
console.log(smallestOfTheThree(600,342,123));
console.log(smallestOfTheThree(2,2,2));

