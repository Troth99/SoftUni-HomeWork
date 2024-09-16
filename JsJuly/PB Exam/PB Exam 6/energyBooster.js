function energyBooster(input){

let fruit = input[0];
let setSize = input[1];
let ordersSets = Number(input[2]);

let packAge = 0


    switch(fruit){
        case `Watermelon`:
            switch(setSize){
                case `small`: packAge+= 56  * 2
                break;
                case `big`: packAge += 28.70 * 5
                break;
            }break;
        case `Mango`:
            switch(setSize){
                case `small`: packAge += 36.66 * 2;
                break;
                case `big`: packAge += 19.60 * 5;
                break;
            }break;
        case`Pineapple`:
            switch(setSize){
                case `small`: packAge += 42.10 * 2
                break;
                case `big`: packAge += 24.80 * 5
                break;
            }break;
        case `Raspberry`:
            switch(setSize){
                case `small`: packAge += 20 *2
                break;
                case `big`: packAge += 15.20 * 5
                break;
            }
            break;
    }

let setsSum = ordersSets * packAge


    if (setsSum >= 400 && setsSum <=1000){
        setsSum = setsSum - setsSum * 0.15
    }else if (setsSum > 1000){
        setsSum = setsSum - setsSum * 0.50
    }

    console.log(`${setsSum.toFixed(2)} lv.`);
    
}

energyBooster(["Watermelon",
    "big",
    "4"])
    
    
    