function solve(number){

let strNum = number.toString();

let sum = 0

for (let i = 0; i < strNum.length; i++){
    let currentDigit = Number(strNum[i])
    sum += currentDigit
}
let result = sum.toString().includes(`9`)

let finalRes = result ? 'True' : `False`

console.log(`${number} Amazing? ${finalRes}`);

}

solve(999)