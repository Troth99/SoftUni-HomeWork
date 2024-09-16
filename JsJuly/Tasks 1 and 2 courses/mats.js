function schoolMats(data){

    let pen = Number(data[0]);
    let markers = Number(data[1]);
    let preparat = Number(data[2]);
    let discount = Number(data[3]);

    penPrice = 5.80;
    markerPrice = 7.20;
    preparatPrice = 1.20;

    let  totalPricePen = pen * penPrice;
    let totalPriceMarker = markers * markerPrice;
    let totalPricePreparat = preparat * preparatPrice;

    let result = totalPriceMarker + totalPricePen + totalPricePreparat; //Общата цена без намаление.

    let priceDiscount = result - (result * discount/100); //Цена с намаление

    console.log(priceDiscount)

}

schoolMats(["2 ","3 ","4 ","25 "])