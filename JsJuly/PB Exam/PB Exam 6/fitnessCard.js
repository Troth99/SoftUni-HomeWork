function fitnessCard(input){

let sumWeHave = Number(input[0]);
let sex = input[1]
let age = Number(input[2]);
let sport = input[3]

let cardSum = 0

switch(sport){
    case `Gym`:
        switch (sex){
            case `m`: cardSum += 42
            break;
            case `f`: cardSum += 35
            break;
        }break;
    case `Boxing`:
        switch (sex){
            case `m`: cardSum += 41
            break;
            case `f`: cardSum += 37
            break;
        }break;
    case `Yoga`:
        switch (sex){
            case `m`: cardSum += 45
            break;
            case `f`: cardSum += 42
            break;
        }break;
    case `Zumba`:
        switch (sex){
            case `m`: cardSum += 34
            break;
            case `f`: cardSum += 31
            break;
        }break;
    case`Dances`:
    switch (sex){
        case `m`: cardSum += 51
        break;
        case `f`: cardSum += 53
        break;
    }break;
    case `Pilates`:
        switch (sex){
            case `m`: cardSum += 39
            break;
            case `f`: cardSum += 37
            break;
        }break;
}

if (age <= 19){
    cardSum = cardSum - cardSum * 0.20
}
if (cardSum <= sumWeHave){
    console.log(`You purchased a 1 month pass for ${sport}.`);
}else if (sumWeHave < cardSum){
    let sum = Math.abs(cardSum - sumWeHave)
    console.log(`You don't have enough money! You need $${sum.toFixed(2)} more.`);
}

}

fitnessCard(["10",
    "m",
    "50",
    "Pilates"])
    
    