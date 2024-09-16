function vacantion(input){

    let index = 0
    let moneyNeeded = Number(input[index])
    index++
    let haveMoney = Number(input[index])
    index++

    let spendMoney = 0;
    let totalDays = 0
   
    
    while (haveMoney < moneyNeeded) {

        let currentTask = input[index]
        index++
        let money = Number(input[index]);
        index++
        if (haveMoney < 0){
            haveMoney =0
        }
        
        totalDays ++
        switch(currentTask){
            case `spend`:
                haveMoney -= money
                spendMoney++
                break;
            case 'save':
                haveMoney += money
                spendMoney = 0
                break;
        }
        

        if (moneyNeeded <= haveMoney){
            console.log(`You saved the money for ${totalDays} days.`);
        }
        if (spendMoney === 5){
            console.log(`You can't save the money.`);
            console.log(totalDays);
            break;
        }
 }
}

/*vacantion(["2000",
    "1000",
    "spend",
    "1200",
    "save",
    "2000"])*/
    /*vacantion(["110",
        "60",
        "spend",
        "10",
        "spend",
        "10",
        "spend",
        "10",
        "spend",
        "10",
        "spend",
        "10"]) */
        
        vacantion(["250",
            "150",
            "spend",
            "50",
            "spend",
            "50",
            "save",
            "100",
            "save",
            "100"])
            
    