function careForPuppy(input){

    let index = 0
    let kilogramsBought = Number(input[index++]) * 1000
    let currentIndex = input[index]

    let totalFoodEaten = 0

    while (currentIndex !== 'Adopted'){

        currentIndex = input[index]
        if (currentIndex === `Adopted`){
            break;
        }
        let currentGrams = Number(input[index++])

        totalFoodEaten += currentGrams


        
    }
    let foodLeft = Math.abs(kilogramsBought - totalFoodEaten)
    if (totalFoodEaten <= kilogramsBought){
        console.log(`Food is enough! Leftovers: ${foodLeft} grams.`);
     }else {
        console.log(`Food is not enough. You need ${totalFoodEaten - kilogramsBought} grams more.`);
        
     }



}


careForPuppy(["3",
    "1000",
    "1000",
    "1000",
    "Adopted"])
    
    
    