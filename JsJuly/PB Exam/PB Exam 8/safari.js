function safari(input){

    let budget = Number(input[0]);
    let fuelLitters = Number(input[1]);
    let day = input[2];

    let fuelPrice = fuelLitters * 2.10
    const Tripguy = 100

    let total = fuelPrice + Tripguy

    if (day === `Saturday`){
        total -= total * 0.10
    }else if (day === `Sunday`){
        total -= total * 0.20
    }

    if (budget >= total){
        let moneyLeft = Math.abs(budget - total)
        console.log(`Safari time! Money left: ${moneyLeft.toFixed(2)} lv. `);
    }else if (total > budget){
        let moneyNeeded = Math.abs(total-budget)
        console.log(`Not enough money! Money needed: ${moneyNeeded.toFixed(2)} lv.`);
    }


}

safari(["105.20",
    "15",
    "Sunday"])
    