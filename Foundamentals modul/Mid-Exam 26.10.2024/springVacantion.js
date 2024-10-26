function springVacantion(arr){

let daysOfTheTrip = Number(arr.shift())

let budget = Number(arr.shift())
let numberOfPeople = Number(arr.shift())
let fulePricePerKilo = Number(arr.shift())
let foodExpenses = Number(arr.shift())
let roomsPrice = Number(arr.shift())

let totalFooedExpenses =  daysOfTheTrip * numberOfPeople * foodExpenses
let totalFoodAndAccommodation = daysOfTheTrip * numberOfPeople * roomsPrice

if (numberOfPeople > 10 ){
    totalFoodAndAccommodation *= 0.75
}

let totalExpenses =  totalFoodAndAccommodation + totalFooedExpenses
let days = 1
for (let i = 0; i < arr.length; i++){

    let killometersPerDay = Number(arr[i])
   
    totalExpenses += killometersPerDay * fulePricePerKilo

    if (days % 3 === 0 || days % 5 === 0){
        totalExpenses += totalExpenses * 0.4
    }
    if (days % 7 === 0){
        totalExpenses -= totalExpenses / numberOfPeople
    }

    if (totalExpenses > budget){
        let moneyNeeded = Math.abs(totalExpenses - budget)
        console.log(`Not enough money to continue the trip. You need ${moneyNeeded.toFixed(2)}$ more.`);
        return;
    };
    days++
}

if (budget >= totalExpenses){
    let moneyLeft = Math.abs(budget - totalExpenses)
    console.log(`You have reached the destination. You have ${moneyLeft.toFixed(2)}$ budget left.`);
    
}
}
springVacantion(["7",
    "12000",
    "5",
    "1.5",
    "10",
    "20",
    "512",
    "318",
    "202",
    "154",
    "222",
    "108",
    "123"])
    
    
    