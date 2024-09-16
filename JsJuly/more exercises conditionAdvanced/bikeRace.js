function bikeRace(input) {

    let juniorNumber = Number(input[0]);
    let seniorsNumber = Number(input[1]);
    let trace = input[2];

    let priceJunior = 0;
    let priceSenior = 0;

    switch (trace) {
        case "trail":
        case 'juniors': priceJunior = juniorNumber * 5.50;
        case "seniors": priceSenior = seniorsNumber * 7; break;
            
        case "cross-country":
        case 'juniors': priceJunior = juniorNumber * 8; 
        case "seniors": priceSenior = seniorsNumber * 9.50;
            if ((juniorNumber + seniorsNumber) >= 50){
                priceJunior = priceJunior - priceJunior * 0.25;
                priceSenior = priceSenior - priceSenior *0.25
            } break;

        case "downhill":
        case 'juniors': priceJunior = juniorNumber * 12.25; 
        case "seniors": priceSenior = seniorsNumber * 13.75; break;

        case "road":
        case 'juniors': priceJunior = juniorNumber * 20; 
        case "seniors": priceSenior = seniorsNumber * 21.50; break;
    }


    let totalSum = priceJunior + priceSenior;
    let donateSum = totalSum - totalSum * 0.05


    console.log(donateSum.toFixed(2))




}

bikeRace(["10", "20", "trail"])
bikeRace(["21", "26", "cross-country"])