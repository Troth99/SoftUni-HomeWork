function jansNottatiion(input) {

    function operations(firstNumber, lastNumber, operator) {
        const operationsMap = {
            '+': (a, b) => a + b,
            '*': (a, b) => a * b,
            '-': (a, b) => a - b,
            '/': (a, b) => a / b
        };
        const operation = operationsMap[operator];

        return operation(firstNumber, lastNumber)

    }
    let stack = [];

    for (let element of input) {
        if (typeof element === 'number') {
            stack.push(element);
        } else if (typeof element === 'string') {
            if (stack.length < 2) {
                console.log("Error: not enough operands!");
                return;
            }

            let lastNumber = stack.pop();
            let firstNumber = stack.pop();
            let operationResult = operations(firstNumber, lastNumber, element);

            if (typeof operationResult === 'string') {
                console.log(operationResult); 
                return;
            }

            stack.push(operationResult);
        }
    }

    if (stack.length === 1) {
        console.log(stack[0]);
    } else if (stack.length > 1) {
        console.log("Error: too many operands!");
    }
}




jansNottatiion([-1,
    1,
    `+`,
    101,
    `*`,
    18,
    `+`,
    3,
    `/`]
   
   
)