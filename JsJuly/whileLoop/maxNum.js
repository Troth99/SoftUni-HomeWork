function maxNum(input) {

    let index = 0;
    let row = input[index];
    let biggestNumber = Number.MIN_SAFE_INTEGER;



    while (row !== `Stop`) {

        let currentNum = Number(row);

        if (currentNum > biggestNumber) {
            biggestNumber = currentNum
        }
        index++
        row = input[index]
    }

    console.log(biggestNumber);


}

maxNum(["100",
    "99",
    "80",
    "70",
    "Stop"])
