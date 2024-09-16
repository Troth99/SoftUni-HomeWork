function change(input){

    let bitcoin = Number(input[0]);
    let chineseYuna = Number(input[1]);
    let commission = Number(input[2])


    let bitcoinPerOne = 1168.
    let chineseYounaPerOne = 0.15 //долара трябва да го сменим в евро
    let dolarPerOne = 1.76;
    let euroPerOne = 1.95


    let younaSum = chineseYounaPerOne * chineseYuna
    let leva = younaSum * dolarPerOne
    let totalBitcoin = bitcoin * bitcoinPerOne

    let sumEuro = totalBitcoin + leva

    let sumEuro1 = sumEuro / euroPerOne

    let totalSum = sumEuro1 * commission / 100

    let sum = sumEuro1 - totalSum

    console.log(sum.toFixed(2));
    

    
}

change([`1`,`5`,`5`])