function solve(arr) {
    let savedNumbers = []; 

    for (let command of arr) {
        if (typeof command === 'number') {

            savedNumbers.push(command);
        } else if (typeof command === 'string') {

            if (savedNumbers.length < 2) {
                console.log("Error: not enough operands!");
                return;
            }


            let num2 = savedNumbers.pop();
            let num1 = savedNumbers.pop();

            let result;
  
            switch (command) {
                case '+': 
                    result = num1 + num2; 
                    break;
                case '-': 
                    result = num1 - num2; 
                    break;
                case '*': 
                    result = num1 * num2; 
                    break;
                case '/': 
                    if (num2 === 0) {
                        console.log("Error: division by zero!");
                        return;
                    }
                    result = num1 / num2;
                    break;
                default:
                    console.log("Error: unknown operator!");
                    return;
            }

    
            savedNumbers.push(result);
        }
    }

 
    if (savedNumbers.length === 1) {
        console.log(savedNumbers[0]);
    } else if (savedNumbers.length > 1) {
        console.log("Error: too many operands!");
    }
}



solve([31,
    2,
    '+',
    11,
    '/']
   
   
   

   
   
   )