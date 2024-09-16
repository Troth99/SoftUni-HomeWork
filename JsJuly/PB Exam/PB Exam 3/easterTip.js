function easterTrip(input) {

    let destination = input[0];
    let dates = input[1]
    let nights = Number(input[2]);

    let totalSum = 0;
    let pricePerNight = 0

    switch (destination) {
        case 'France':
            if (dates === '21-23') {
                pricePerNight = 30
            } else if (dates === "24-27") {
                pricePerNight = 35;
            } else if (dates === '28-31') {
                pricePerNight = 40;
            } break;
        case 'Italy':
            if (dates === '21-23') {
                pricePerNight = 28;
            } else if (dates === "24-27") {
                pricePerNight = 32;
            } else if (dates === '28-31') {
                pricePerNight = 39;
            } break;
        case 'Germany':
            if (dates === '21-23') {
                pricePerNight = 32;
            } else if (dates === `24-27`) {
                pricePerNight = 37;
            } else if (dates === '28-31') {
                pricePerNight = 43;
            } break;
    }

    totalSum = pricePerNight * nights
    console.log(`Easter trip to ${destination} : ${totalSum.toFixed(2)} leva.`);

}

easterTrip(["Italy",
    "21-23",
    "7"])
    
