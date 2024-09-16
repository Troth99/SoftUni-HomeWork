function deerOFSanta(input){

    let daysGone = Number(input[0]);
    let foodLeftInKilos = Number(input[1])
    let firstDeerFoodPerDay = Number(input[2]);
    let secondDeerFoodPerDay = Number(input[3]);
    let thirdDeerFoodPerDay = Number(input[4]);


    let neededFoodForOne = firstDeerFoodPerDay * daysGone
    let neededFoodForTwo = secondDeerFoodPerDay * daysGone
    let neededFoodForThird = thirdDeerFoodPerDay * daysGone

    let totalFood = + neededFoodForOne + neededFoodForTwo + neededFoodForThird

    if (totalFood < foodLeftInKilos){
        console.log(`${Math.floor(foodLeftInKilos - totalFood)} kilos of food left.`);
    }else {
        console.log(`${Math.ceil(totalFood - foodLeftInKilos)} more kilos of food are needed.`);
    }


}



deerOFSanta(["5",
    "10",
    "2.1",
    "0.8",
    "11"])
    
    