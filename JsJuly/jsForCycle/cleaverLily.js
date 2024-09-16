function Lily(input){

    let index = 0;
    let lilyAge = Number(input[index]);
    index++
    let washingmachinePrice = Number(input[index]);
    index++
    let toyPrice = Number(input[index]);
    index++

    let toysCount = 0;
    let savings = 0;
    let birthdayMoney = 0;

    for (let i = 1; i <= lilyAge; i++){

        if(i % 2=== 0){
            savings +=10
            savings += birthdayMoney -1
        }else {
            toysCount++
        }
        
    } 
    let sales = toysCount * toyPrice
        let totalSavings = sales + savings

    if(totalSavings >= washingmachinePrice){
        let moneyleft = Math.abs(totalSavings - washingmachinePrice)
        console.log(`Yes! ${(moneyleft).toFixed(2)}`);
    }else {
        console.log(`No! ${(washingmachinePrice - totalSavings).toFixed(2)}`);
    }


}

Lily(["10" , " 170.00" , "6"])