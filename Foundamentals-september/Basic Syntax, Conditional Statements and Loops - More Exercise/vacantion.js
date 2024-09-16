function solve(groupOfPeople, typeOfGroup, dayOfTheWeek){

let price = 0
let totalPrice = 0
switch(dayOfTheWeek){
    case `Friday`:
        switch (typeOfGroup){
            case `Students`:
            price = 8.45
            break;
            case `Business`:
                price = 10.90
            break;
            case `Regular`:
                price = 15
            break;            
        }break;
    case `Saturday`:
        switch (typeOfGroup){
            case `Students`:
            price = 9.80
            break;
            case `Business`:
                price = 15.60
            break;
            case `Regular`:
                price = 20
            break; 
        }break;
    case `Sunday`:
        switch (typeOfGroup){
            case `Students`:
            price = 10.46
            break;
            case `Business`:
                price = 16
            break;
            case `Regular`:
                price = 22.50
            break; 
        }break;
        
}
totalPrice = groupOfPeople * price
    if (typeOfGroup === `Students` && groupOfPeople >= 30){
        totalPrice -= totalPrice * 0.15
    }else if (typeOfGroup === `Business` && groupOfPeople >= 100){
        totalPrice = totalPrice - (price * 10)
    }else if (typeOfGroup === `Regular` && (groupOfPeople >= 10 && groupOfPeople <= 20)){
        totalPrice -= totalPrice * 0.05
    }
console.log(`Total price: ${totalPrice.toFixed(2)}`);



}
solve(110,
    "Business",
    "Saturday"
    )