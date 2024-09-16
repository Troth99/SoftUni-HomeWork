function trainTheTrainers(input) {

    let index = 0;
    let judge = Number(input[index++])

    let currentIndex = input[index++]

    let totalSumPresentation = 0
    let numberCount = 0

    while (currentIndex !== `Finish`) {

        let sumAvgOne = 0

        for (let i = 0; i < judge; i++) {
            let currentNumber = Number(input[index])
            sumAvgOne += currentNumber
            totalSumPresentation += currentNumber
            numberCount ++
            index++
        }

        let avgSum = sumAvgOne / judge
        console.log(`${currentIndex} - ${avgSum.toFixed(2)}.`);

        currentIndex = input[index++]
    }
    let studentAvg = totalSumPresentation / numberCount
    console.log(`Student's final assessment is ${studentAvg.toFixed(2)}. `);
    

}


trainTheTrainers(["3",
    "Arrays",
    "4.53",
    "5.23",
    "5.00",
    "Lists",
    "5.83",
    "6.00",
    "5.42",
    "Finish"])
    
