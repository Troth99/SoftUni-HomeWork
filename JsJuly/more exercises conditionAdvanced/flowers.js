function flowerShop(input) {

    let hrizantema = Number(input[0]);
    let roses = Number(input[1]);
    let tulips = Number(input[2]);
    let season = input[3];
    let weekendOrweekDay = input[4];

    let priceHrizantema = 0;
    let priceRoses = 0;
    let priceTulips = 0;

    switch (season) {
        case "Spring":
        case "Summer":
        case "hrizantema": priceHrizantema = hrizantema * 2;
        case "roses": priceRoses = roses * 4.10;
        case "tulips": priceTulips = tulips * 2.50; 
        break;
        case "Autumn":
        case "Winter":
        case "hirzantema": priceHrizantema = hrizantema * 3.75;
        case "roses": priceRoses = roses * 4.50;
        case "tulips": priceTulips = tulips * 4.15; break;
    }
    let totalPrice = priceHrizantema + priceRoses + priceTulips


    if (season === 'Spring' && tulips > 7) {
        totalPrice =totalPrice - totalPrice * 0.05


    } if (roses >= 10 && season === "Winter") {
        totalPrice = totalPrice - totalPrice * 0.10
    }
    if ((roses + tulips + hrizantema) > 20) {
        totalPrice = totalPrice - totalPrice * 0.20
    }

    if (weekendOrweekDay === "Y") {
        totalPrice = totalPrice + totalPrice * 0.15
    } else if (weekendOrweekDay === "N") {
        totalPrice = totalPrice
    }


    //let totalPrice = priceHrizantema + priceRoses + priceTulips
    console.log((totalPrice + 2).toFixed(2))
}

flowerShop(["2", "4", " 8", "Spring", "Y"])
flowerShop(["3", "10", " 9", "Winter", "N"])
