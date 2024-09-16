function pets(input){

    let days = Number(input[0]);
    let leftFoodKilo = Number(input[1]);
    let foodDogPerDay = Number(input[2]);
    let foodCatPerDay = Number(input[3]);
    let foodTurtlePerDay = Number(input[4]);

    let needFoodForDog = days * foodDogPerDay;
    let needFoodForCat = days * foodCatPerDay;
    let needFoodForTurtle = (days * foodTurtlePerDay) / 1000;

    let totalFood = needFoodForCat + needFoodForDog + needFoodForTurtle;

    if (totalFood < leftFoodKilo){
        let kiloLeft = Math.floor (leftFoodKilo - totalFood);
        console.log(`${kiloLeft} kilos of food left.`);
    } else
    console.log(`${Math.ceil(totalFood - leftFoodKilo)} more kilos of food are needed.`)
    
}
pets(["2" , "10" , "1" , "1" , "1200"])
pets(["5" , " 10" , "2.1" , " 0.8" , "321"])