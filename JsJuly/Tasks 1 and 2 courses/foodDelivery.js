function foodDelivery(input){

    let chickenMenuCount = Number(input[0]);
    let fishMenuCount = Number(input[1]);
    let vegetarianMenuCount = Number(input[2]);

    let chikenPrice = 10.35;
    let fishPrice = 12.40;
    let vegetarianPrice = 8.15;
    let foodDeliveryPrice = 2.50;

    let totalChikenPrice = chickenMenuCount * chikenPrice;
    let totalFishPrice = fishMenuCount * fishPrice;
    let totalVegetarianPrice = vegetarianMenuCount * vegetarianPrice;

    let currentSum = totalChikenPrice + totalFishPrice + totalVegetarianPrice;
    let dessertPrice = currentSum * 0.20;

    let bill = dessertPrice + currentSum + foodDeliveryPrice;

    console.log(bill);

}

foodDelivery(["2", "4" , "3"])