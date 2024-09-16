function sumOfNumber(input){

    let sum = 0;
    let numAsString = input[0]

    for(let index = 0; index <numAsString.length; index ++){

        let currentDigit = Number(numAsString[index]);

        sum += currentDigit;


    }
console.log(`The sum of the digits is:${sum}`);

}

sumOfNumber(['045563'])