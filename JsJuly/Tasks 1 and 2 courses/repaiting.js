function repainting(input){

    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let hours = Number(input[3]);

    let nylonPrice = (nylon +2)* 1.50;
    let paintPrice =  (paint*1.1) * 14.50;
    let thinnerPrice = thinner * 5.00;
    let bags = 0.40;

    let totalPriceMats = nylonPrice + paintPrice + thinnerPrice + bags;
    let totalPriceWorkers = (totalPriceMats*0.30) * hours;
    let totalPrice = totalPriceMats +totalPriceWorkers;


    console.log(totalPrice)


}

repainting(["10","11" , "4" , "8"])