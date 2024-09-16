function foorForPets(input){
    let index = 0
    let days = Number(input[index++])
    let food = Number(input[index++])

    let biscuits = 0
    let dogFood = 0
    let catFood = 0
    let totalFoodEaten = 0


    for (let i = 1; i <= days; i++){
        
        let foodForDog = Number(input[index++])

        let foodForCat = Number(input[index++])

        dogFood += foodForDog  
        catFood += foodForCat
        totalFoodEaten += (foodForCat + foodForDog)


        if (i % 3 === 0){
            let currentBuisctis = (foodForDog + foodForCat) * 0.10
            biscuits += currentBuisctis
        }

        
        
    }
    let percentFoodEaten = (totalFoodEaten / food) * 100
     console.log(`Total eaten biscuits: ${Math.round(biscuits)}gr.`);
    console.log(`${(percentFoodEaten.toFixed(2))}% of the food has been eaten.`);
    console.log(`${((dogFood / totalFoodEaten)* 100).toFixed(2)}% eaten from the dog.`);
    console.log(`${((catFood / totalFoodEaten)* 100).toFixed(2)}% eaten from the cat.`);
    
    
    

}

foorForPets(["3",
    "500",
    "100",
    "30",
    "110",
    "25",
    "120",
    "35"])
    
    