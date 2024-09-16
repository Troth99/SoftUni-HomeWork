function odd(input) {
    let sumOdd = 0;
    let sumEven = 0;

    let maxOdd = Number.NEGATIVE_INFINITY;
    let minOdd = Number.POSITIVE_INFINITY;

    let maxEven = Number.NEGATIVE_INFINITY;
    let minEven = Number.POSITIVE_INFINITY;

    for (let index = 1; index < input.length; index++) {
        let currentNumber = Number(input[index]);

        if (index % 2 !== 0) {  // Odd index
            sumOdd += currentNumber;
            if (currentNumber < minOdd) {
                minOdd = currentNumber;
            }
            if (currentNumber > maxOdd) {
                maxOdd = currentNumber;
            }
        } else {  // Even index
            sumEven += currentNumber;
            if (currentNumber < minEven) {
                minEven = currentNumber;
            }
            if (currentNumber > maxEven) {
                maxEven = currentNumber;
            }
        }
    }

    if (maxOdd === Number.NEGATIVE_INFINITY) {
        maxOdd = 'No';
    } else {
        maxOdd = maxOdd.toFixed(2);
    }

    if (minOdd === Number.POSITIVE_INFINITY) {
        minOdd = 'No';
    } else {
        minOdd = minOdd.toFixed(2);
    }

    if (maxEven === Number.NEGATIVE_INFINITY) {
        maxEven = 'No';
    } else {
        maxEven = maxEven.toFixed(2);
    }

    if (minEven === Number.POSITIVE_INFINITY) {
        minEven = 'No';
    } else {
        minEven = minEven.toFixed(2);
    }

    console.log(`OddSum=${sumOdd.toFixed(2)},`);
    console.log(`OddMin=${minOdd},`);
    console.log(`OddMax=${maxOdd},`);
    console.log(`EvenSum=${sumEven.toFixed(2)},`);
    console.log(`EvenMin=${minEven},`);
    console.log(`EvenMax=${maxEven}`);
}

odd(["6" , "2" , "3" , "5" , "4" , "2" , "1"]);


