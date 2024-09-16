function catDiet (input){

    let maznini = Number(input[0])
    let protein = Number(input[1])
    let vuglehidrats = Number(input[2])
    let totalKalories = Number(input[3])
    let totalWater = Number(input[4])


    let mazniniPerGram = 9 //kalorii
    let proteinPerGram = 4 //kalorii
    let vubgleHydratGram = 4 //kalorii

    let totalMaznini = (maznini / 100) * totalKalories
    let sumMaznini = totalMaznini / mazniniPerGram
    
    let totalProtein = (protein / 100) * totalKalories
    let sumProtein = totalProtein / proteinPerGram
    let vuglehydratsTotal = (vuglehidrats / 100) * totalKalories
    let sumVuglehydrats = vuglehydratsTotal / vubgleHydratGram

    let totalFood = sumMaznini + sumProtein + sumVuglehydrats

    let kaloriesPerGram = totalKalories / totalFood

    let percentageKalories =  (100 - totalWater)
    let totalAll = (percentageKalories / 100) * kaloriesPerGram
    console.log(totalAll.toFixed(4));
    
}


catDiet(["20",
    "60",
    "20",
    "1800",
    "50"])
    
    
    