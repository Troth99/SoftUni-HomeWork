function schoolTools(input){

    let pencilsPrice = Number(input[0]);
    let markersPrice = Number(input[1]);
    let preparataionPrice = Number(input[2]);
    let discountNumber = Number(input[3]);

    let pencilTotal = pencilsPrice * 5.80;
    let markersTotal = markersPrice * 7.20;
    let preparationTotal = preparataionPrice * 1.20;
    let totalPrice = pencilTotal+markersTotal+preparationTotal;
    let totalPriceDiscount = totalPrice - (totalPrice*discountNumber/100);


    console.log(totalPriceDiscount);
    
}

schoolTools(["2" ," 3","4", "25"])