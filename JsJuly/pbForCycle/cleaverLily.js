function lily(input){

    let index = 0;
    let lilyAge = Number(input[index]);
    index++
    let washingMachine = Number(input[index]);
    index++
    let toyPrice = Number(input[index]);

    let toyCount = 0
    let savings = 0;
    let birthdayMoney =0


    for (let i = 1; i <= lilyAge; i++){

        if (i % 2 === 0){
            savings += 10
           savings += birthdayMoney -1
        }
        else if (i %2 !== 0){
            toyCount++
        }

        
    }
    let toysPrice = toyPrice * toyCount
    let totalMoney = toysPrice + savings
    
    if (savings >= washingMachine){
        console.log(`Yes! ${totalMoney - washingMachine.toFixed(2)}`);
    }else {
        console.log(`No! ${washingMachine - totalMoney.toFixed(2)}`);
    }




}

lily(["10",
    "170.00",
    "6"])
    