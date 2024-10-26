function piggo(arr){

let quantityFoodInKilograms = Number(arr.shift()) * 1000
let quantityHayInKilograms = Number(arr.shift()) * 1000
let quantityCoverInKilograms = Number(arr.shift()) * 1000
let guineasWeightInIkilos = Number(arr.shift()) * 1000



for (let i = 1; i <= 30; i++){

        quantityFoodInKilograms -= 300

        if (i % 2 === 0){
         let hayNeeded = quantityFoodInKilograms - quantityFoodInKilograms * 0.95
         quantityHayInKilograms -= hayNeeded
      
        }
        if ( i % 3 === 0){
            let coverLeft = guineasWeightInIkilos / 3
            quantityCoverInKilograms -= coverLeft
           
            
        }
}

if (quantityCoverInKilograms > 0 && quantityFoodInKilograms > 0 && quantityHayInKilograms > 0){
    console.log(`Everything is fine! Puppy is happy! Food: ${(quantityFoodInKilograms/1000).toFixed(2)}, Hay: ${(quantityHayInKilograms/1000).toFixed(2)}, Cover: ${(quantityCoverInKilograms/1000).toFixed(2)}.`);
    
}else if (quantityCoverInKilograms <= 0 || quantityFoodInKilograms <= 0 || quantityHayInKilograms <= 0){
    console.log(`Merry must go to the pet store!`);
    
}


}


piggo(["9",
    "5",
    "5.2",
    "1"])
    
    


    