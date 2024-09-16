function toyShop(input) {

    let tripPrice = Number(input[0]);
    let puzzleNumber = Number(input[1]);
    let dollsNumber = Number(input[2]);
    let bearNumbers = Number(input[3]);
    let minionNumber = Number(input[4]);
    let truckNumbers = Number(input[5]);

    puzzle = 2.60;
    doll = 3;
    bear = 4.10;
    minion = 8.20;
    truck = 2;

    let pricePuzzel = puzzleNumber * puzzle;
    let priceDolls = dollsNumber * doll;
    let priceBear = bearNumbers * bear;
    let minionPrice = minionNumber * minion;
    let truckPrice = truckNumbers * truck;

    let totalSum = pricePuzzel + priceDolls + priceBear + minionPrice + truckPrice;
    let toyNumbers = puzzleNumber + dollsNumber + bearNumbers + minionNumber + truckNumbers;
    if (toyNumbers >= 50) {
        totalSum *= 0.75;

    }
    totalSum *= 0.9; //Наем.

    if (totalSum >= tripPrice) {
        let moneyLeft = totalSum - tripPrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`)
    }
    else {
        let nedostic = tripPrice - totalSum;
        console.log(`Not enough money! ${nedostic.toFixed(2)} lv needed.`)
    }
}

toyShop(["40.8", "20", "25", "30", "50", "10"])
toyShop(["320",
    "8",
    "2",
    "5",
    "5",
    "1"])
