function excursionTable(input){

let numberOfPeople = Number(input[0])
let season = input[1]

let price = 0

if (numberOfPeople <= 5){
    switch(season){
        case`spring`: price = 50.00;break;
        case `summer`: price = 48.50; break;
        case `autumn`: price = 60.00; break;
        case `winter`: price = 86.00; break;
    }
}else if (numberOfPeople > 5){
    switch(season){
        case`spring`: price = 48.00;break;
        case `summer`: price = 45.00; break;
        case `autumn`: price = 49.50; break;
        case `winter`: price = 85.00; break;
    }
}

let totalPrice = price * numberOfPeople

switch(season){
    case`summer`: totalPrice -= totalPrice * 0.15
    break;
    case `winter`: totalPrice *= 1.08
    break;
}

console.log(`${totalPrice.toFixed(2)} leva.`);


}


excursionTable(["20",
    "winter"])
    
    
    