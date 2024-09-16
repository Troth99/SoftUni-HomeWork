function vacantion(input) {

    let budget = Number(input[0]);
    let season = input[1];

    let price = 0;
    let place = "";
    let placeRest = "";

    if (budget <= 1000) {
        place = "Camp"
        switch (season) {
            case "Summer":
                placeRest = "Alaska";
                price = budget * 0.65;
                break;
            case "Winter":
                placeRest = "Morocco";
                price = budget * 0.45;
                break;
        }
    }
    if (budget > 1000 && budget <= 3000) {
        place = "Hut"
        switch (season) {
            case "Summer":
                placeRest = "Alaska";
                price = budget * 0.80 ;
                break;
            case "Winter":
                placeRest = "Morocco";
                price = budget * 0.60;
                break;
        }
    }
    if (budget > 3000) {
        place = "Hotel";
        if (season === "Summer") {
            placeRest = "Alaska";
            price = budget * 0.90;
        } else if (season === "Winter") {
            placeRest = "Morocco";
            price = budget * 0.90;
        }
    }
    




    console.log(`${placeRest} - ${place} - ${price.toFixed(2)}`)
}

vacantion(["800", "Summer"])
vacantion(["799.50", "Winter"])
vacantion(["3460", "Summer"])
vacantion(["5000", "Winter"])
vacantion(["1100", "Summer"])
vacantion(["2543.99", "Winter"])