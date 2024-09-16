function evenOrOdd(input){

let num1 = Number(input[0])
let num2 = Number(input[1])

let consoleLog = ""

for (let line = num1; line <= num2; line++){
    let currentNum = String(line)

    let even = 0
    let odd = 0
    for (let j = 0; j <currentNum.length; j++){
        let currentDigit = Number(currentNum[j])

        if (j % 2 === 0){
            even += currentDigit
        }else {
            odd += currentDigit
        }
    }
    if (odd === even){
        consoleLog += `${line} `
    }
}

console.log(consoleLog);


}


evenOrOdd(["100000",
    "100050"])
    