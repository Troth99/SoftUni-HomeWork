function treckingMania(input){

let numberOfGorups = Number(input[0])


let totalPeople = 0

let musala = 0
let monblan = 0
let kilimanjaro = 0
let k2 = 0
let everest = 0

for (let i = 1; i <= numberOfGorups; i++){

    let currentIndex = Number(input[i])

    if (currentIndex <= 5){
        musala += currentIndex
        totalPeople += currentIndex
    }else if (currentIndex >= 6 && currentIndex <=12){
        monblan += currentIndex
        totalPeople += currentIndex
    }else if (currentIndex >= 13 && currentIndex <=25){
        kilimanjaro += currentIndex
        totalPeople += currentIndex
    }else if (currentIndex >= 26 && currentIndex <= 40){
        k2 += currentIndex
        totalPeople += currentIndex
    }else if (currentIndex >= 41){
        everest += currentIndex
        totalPeople += currentIndex
    }
    
}
let percentageMusala =  musala / totalPeople * 100
let percentageMonblan =  monblan / totalPeople* 100
let percentageKilimajaro = kilimanjaro / totalPeople * 100
let percentageK2 =  k2 / totalPeople * 100
let percentageEverest = everest / totalPeople * 100


console.log(`${percentageMusala.toFixed(2)}%`);
console.log(`${percentageMonblan.toFixed(2)}%`);
console.log(`${percentageKilimajaro.toFixed(2)}%`);
console.log(`${percentageK2.toFixed(2)}%`);
console.log(`${percentageEverest.toFixed(2)}%`);






}

treckingMania(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"])
    