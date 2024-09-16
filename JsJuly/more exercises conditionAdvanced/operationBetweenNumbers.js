function operationBetweenNumbers(input) {

    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let operator = input[2];

    let total = 0;

    switch (operator) {
        case "+": total = num1 + num2; break;
        case "-": total = num1 - num2; break;
        case "*": total = num1 * num2; break;
        case "/": total = num1 / num2; break;
        case "%": total = num1 % num2; break;

    }

    if (operator === '+' || operator === '-' || operator === '*') {
        if (total % 2 === 0) {
            console.log(`${num1} ${operator} ${num2} = ${total} - even`)
        } else {
            console.log(`${num1} ${operator} ${num2} = ${total} - odd`)
        }
    }
    if (operator === "/" && num2 !== 0) {
        console.log(`${num1} ${operator} ${num2} = ${total.toFixed(2)}`)
    } else if (operator === "/" && num2 === 0) {
        console.log(`Cannot divide ${num1} by zero`)
    } else if (operator === "%" && num2 !== 0) {
        console.log(`${num1} ${operator} ${num2} = ${total}`)
    } else if (operator === '%' && num2 === 0) {
        console.log(`Cannot divide ${num1} by zero`)
    }


}

operationBetweenNumbers(['10' , "12" , "+"])
operationBetweenNumbers(['10' , '1' , "-"])
operationBetweenNumbers(['7' , " 3" , "*"])
operationBetweenNumbers(['123' , " 12" , "/"])
operationBetweenNumbers(['10' , " 3" , "%"])
operationBetweenNumbers(['112' , " 0" , "/"])
operationBetweenNumbers(['10' , " 0" , "%"])