function solve(firstNum, SecondNum, ThirdNumb){

let sum = firstNum + SecondNum + ThirdNumb

let sumType = sum % 1 === 0 ? "Integer": "Float"

console.log(`${sum} - ${sumType}`);


}

solve(100, 200, 303)