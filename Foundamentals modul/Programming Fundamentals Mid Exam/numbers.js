function mainOfNumbers(numbers) {

    let arr = []
    function findAverage(num) {

        let averageNumber = 0

        let split = num.split(` `)
        for (let i = 0; i < split.length; i++) {


            let currentNumber = +split[i]

            averageNumber += currentNumber

        }

        let findAvg = averageNumber / split.length
        return findAvg
    }

    function findTop5Greaters(num) {

        let split = num.split(` `).map(Number)
        let filteredNumbers = split.filter(n => n > resultAverage)
        filteredNumbers.sort((a, b) => b - a)

        return filteredNumbers.slice(0, 5)





    }

    let resultAverage = findAverage(numbers)
    let top5 = findTop5Greaters(numbers)

    if (top5.length > 0) {
        console.log(top5.join(` `));
    } else {
        console.log(`No`);

    }







}


mainOfNumbers('10 20 30 40 50')
mainOfNumbers('1')
//mainOfNumbers('5 2 3 4 -10 30 40 50 20 50 60 60 51')
//mainOfNumbers('-1 -2 -3 -4 -5 -6')