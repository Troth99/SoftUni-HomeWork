function flowerShop(input) {

    let magnoliaNumber = Number(input[0]);
    let zumbiulNumber = Number(input[1]);
    let roseNumber = Number(input[2]);
    let kaktusNumber = Number(input[3]);
    let priceGift = Number(input[4]);

    const magnolia = 3.25;
    const zumbiul = 4;
    const roses = 3.50;
    const kactus = 8;

    let totalSum = (magnoliaNumber * magnolia) + (zumbiulNumber * zumbiul) +
        (roseNumber * roses) + (kaktusNumber * kactus);

    let tax = totalSum *0.05;
    let finalPrice = totalSum - tax;


    if (finalPrice >= priceGift) {
        let moneyleft = Math.floor(finalPrice - priceGift)
        console.log(`She is left with ${moneyleft} leva.`);
    } else {
        let moneyNeeded = Math.ceil(priceGift - finalPrice);
        console.log(`She will have to borrow ${moneyNeeded} leva.`)
    }





}

flowerShop(["2", "3", "5", "1", "50"])
flowerShop(["15", "7", "5", "10", "100"])