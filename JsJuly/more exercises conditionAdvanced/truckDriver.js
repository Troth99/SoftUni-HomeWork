function truckDriver(input){

    let season = input[0];
    let kilometers = Number(input[1]);

    let moneyEarn = 0;

    switch (season){
        case "Spring":
        case "Autumn":
            if (kilometers <= 5000){
                moneyEarn = kilometers * 0.75
            }
            else if (kilometers > 5000 && kilometers <= 10000){
                moneyEarn = kilometers * 0.95;
            }
            break;
    }switch (season){
        case 'Summer':
            if (kilometers <= 5000){
                moneyEarn = kilometers * 0.90
            }
            else if (kilometers > 5000 && kilometers <= 10000){
                moneyEarn = kilometers * 1.10;
            }
            break;
    }switch(season){
        case 'Winter':
            if(kilometers <= 5000){
                moneyEarn = kilometers * 1.05;
            }else if (kilometers > 5000 && kilometers <= 10000){
                moneyEarn = kilometers * 1.25;
            }break;

    }
    if (kilometers > 10000 && kilometers <= 20000){
        moneyEarn = kilometers * 1.45;
    }

    let total = moneyEarn * 4
    let total1 = total - total * 0.10

    console.log(total1.toFixed(2))

}

truckDriver(["Summer", "3455"])
truckDriver(["Winter", "4350"])
truckDriver(["Spring", "1600"])