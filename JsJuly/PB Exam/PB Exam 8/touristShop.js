function touristShop(input){

    let index = 0
    let budget = Number(input[index++])
    let currentIndex = input[index]

    let totalPrice = 0
    let numberOfProducts = 0
    let currentPrice = 0

    while(currentIndex !== `Stop`){

        currentIndex = input[index++]
        
        let currentItemPrice = Number(input[index++])

        if ((numberOfProducts + 1) % 3 === 0){                                    
            currentItemPrice /= 2
         }

        if (currentItemPrice > budget){
            currentPrice = currentItemPrice
            break;
        }
        
   
        budget -= currentItemPrice
        totalPrice += currentItemPrice
        numberOfProducts++

        currentIndex = input[index]
        
    }

    if (currentIndex === `Stop`){
        console.log(`You bought ${numberOfProducts} products for ${totalPrice.toFixed(2)} leva.`);
    }else if (currentPrice > budget){
        let neededMoney = currentPrice - budget
        console.log(`You don't have enough money!`);
        console.log(`You need ${neededMoney.toFixed(2)} leva!`);
    }


        


}


touristShop([`153.20`,
    `Backpack`
    ,`25.20`
    ,`Shoes`
    ,`54`
    ,`Sunglasses`
    ,`30`,
    `Stop`
    ]) 

    /*touristShop([`54`,
        `Thermal underwear`,
        `24`,
        `Sunscreen`,
        `45`
        ])*/