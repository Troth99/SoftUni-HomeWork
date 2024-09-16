function footBallTickets(input){

    let budget = Number(input[0]);
    let category = input[1];
    let personNumber = input[2];

    let priceTicket = 0;

    switch (category){
        case "VIP" : priceTicket = personNumber * 499.99; break;
        case "Normal": priceTicket = personNumber * 249.99; break;
    }

    if (personNumber >= 1 && personNumber <= 4){
        budget = budget - budget * 0.75;
    }else if (personNumber >=5 && personNumber <=9){
        budget = budget - budget * 0.60;
    }else if (personNumber >=10 && personNumber <=24){
        budget = budget - budget * 0.50;
    }else if (personNumber >=25 && personNumber <=49){
        budget = budget - budget * 0.40;
    }else if (personNumber >= 50){
        budget = budget - budget * 0.25
    }

    let moneyLeft = Math.abs(priceTicket-budget)
    let moneyNeeded = Math.abs(budget-priceTicket);

    if (budget >=priceTicket){
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`)
    }else {
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
    }
}

footBallTickets(["1000","Normal" ,"1"])
footBallTickets(["30000","VIP" ,"49"])