function bitcoinMining(input){

let index = 0
let bitcoinPerOne = 11949.16
let oneGramOfGold = 67.51

let sumOfExchange = 0
let bitcoinBuyOuts = 0
let firstPurchase = 0
for (let i = 1; i<= input.length; i++){

    let currentGrams = Number(input[index++])

    if (i %3 === 0){
        currentGrams = currentGrams - currentGrams * 0.30
    }

    sumOfExchange += currentGrams * oneGramOfGold
    

        
        for (let k= bitcoinPerOne; k<= sumOfExchange; k++){
            sumOfExchange -= bitcoinPerOne
            bitcoinBuyOuts++
        if (bitcoinBuyOuts === 1){
            firstPurchase = i
        }
    
    }
   
}


console.log(`Bought bitcoins: ${bitcoinBuyOuts.toFixed(0)}`);
if (bitcoinBuyOuts >= 1){
console.log(`Day of the first purchased bitcoin: ${firstPurchase}`)
}
console.log(`Left money: ${sumOfExchange.toFixed(2)} lv.`);



}


//bitcoinMining([`3124.15`, `504.212`, `2511.124`])
bitcoinMining([`100`, `200`, `300`])