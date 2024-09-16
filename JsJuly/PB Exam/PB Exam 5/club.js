function club(input) {

    let index = 0;
    let clubIncome = Number(input[index])
    index++

    let pricePerOrder = 0;
    let income = 0


    for (let data = 0; data < input.length; data++ ) {

        let coctailName = input[index]
        index++
        let coctailNumber = Number(input[index])
        index++


        pricePerOrder = coctailName.length * coctailNumber
        income += pricePerOrder

        if (pricePerOrder % 2 !== 0) {
            income -= pricePerOrder * 0.25;

        }
        let command = input[index];

        let neededMoney = Math.abs(clubIncome - income)
        if (command === `Party!`) {
            console.log(`We need ${neededMoney.toFixed(2)} leva more.`);
            console.log(`Club income - ${income.toFixed(2)} leva.`);
            break;

        }
        if (income >= clubIncome) {
            console.log(`Target acquired.`);
            console.log(`Club income - ${income.toFixed(2)} leva.`);
            break;


        }


    }


}
club(["100",
    "Sidecar",
    "7",
    "Mojito",
    "5",
    "White Russian",
    "10"])

