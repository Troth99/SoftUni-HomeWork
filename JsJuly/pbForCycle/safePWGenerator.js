function safeGenerator(input) {
    let [upperLimit1, upperLimit2, maximumAmount] = [...input.map((x) => Number(x))];
    let passwordList = [];
    let symbolA = 35;
    let symbolB = 64;
    let symbolX = 1;
    let symbolY = 1;

    while (symbolX <= upperLimit1 && symbolY <= upperLimit2) {
        let A = String.fromCharCode(symbolA);
        let B = String.fromCharCode(symbolB);

        let currentPassword = `${A}${B}${symbolX}${symbolY}${B}${A}`;
        passwordList.push(currentPassword);
        maximumAmount--;

        if (maximumAmount === 0) {
            break;
        }

        symbolA++;
        symbolB++;

        if(symbolA > 55){
            symbolA = 35;
        }

        if(symbolB > 96){
            symbolB = 64;
        }

        symbolY++;

        if (symbolY > upperLimit2 && symbolX !== upperLimit1) {
            symbolX++;
            symbolY = 1;
        }
    }

    console.log(passwordList.join('|') + '|');
}


safeGenerator ([`2` , `3` , `10`])