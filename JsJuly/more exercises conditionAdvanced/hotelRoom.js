function hootelRoom(input) {

    let month = input[0];
    let nights = Number(input[1]);

    let priceApartment = 0;
    let priceStudio = 0;

    switch (month) {
        case "May":
        case "October":
        case "Studio": priceStudio = nights * 50;
            if (nights > 7 && nights < 14) {
                priceStudio = priceStudio - priceStudio * 0.05;
            } else if (nights >14 ) {
                priceStudio = priceStudio - priceStudio * 0.30;
            }
        case "Apartment": priceApartment = nights * 65;
            if (nights > 14) {
                priceApartment = priceApartment - priceApartment * 0.10;
            } break;

    }
    switch (month) {
        case "June":
        case "September":
        case "Studio": priceStudio = nights * 75.20;
            if (nights > 14) {
                priceStudio = priceStudio - priceStudio * 0.20;
            }
    case "Apartment": priceApartment = nights * 68.70;
            if (nights > 14) {
                priceApartment = priceApartment - priceApartment * 0.10;
            } break;
    }
    switch (month) {
        case "July":
        case "August":
        case "Studio": priceStudio = nights* 76;
        case "Apartment": priceApartment = nights * 77;
            if (nights > 14) {
                priceApartment = priceApartment - priceApartment * 0.10;
            } break;
    }


  

    console.log(`Apartment: ${priceApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${priceStudio.toFixed(2)} lv.`)




}

hootelRoom(["May", "15"])
hootelRoom(["June" , "14"])
hootelRoom(["August" , "20"])