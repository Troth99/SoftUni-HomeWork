function foodDelivery(inputUserData){

    let chikenMenu = Number(inputUserData[0]);
    let fishMenu = Number(inputUserData[1]);
    let vegetableMenuNumber = Number(inputUserData[2]);

     chiken = 10.35;
     fishMeat = 12.40;
     vegetableMenu = 8.15;
     deliver = 2.50;

    let chickenSum = chikenMenu * chiken;
    let fishSum = fishMenu * fishMeat;
    let vegetableSum = vegetableMenu * vegetableMenuNumber;

    let totalSum = chickenSum + fishSum + vegetableSum;

    let desertPrice = totalSum * (20/100);

    let totalSumPrice = totalSum + desertPrice + deliver;

    console.log(totalSumPrice)




}

foodDelivery(["2" , "4" , "3"])
foodDelivery(["9" , "2" , "6"])