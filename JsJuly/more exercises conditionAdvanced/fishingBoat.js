function fishingBoat(input) {

    let rentShip = Number(input[0]);
    let season = input[1];
    let numberPeople = input[2];

    let price = 0;

    switch (season) {
        case "Spring": price = 3000; break;
        case "Summer":
        case "Autumn": price = 4200; break;
        case "Winter": price = 2600; break;
    }
    if (numberPeople <= 6) {
        price = price - price * 0.10;
    } else if (numberPeople >= 7 && numberPeople <= 11) {
        price = price - price * 0.15;
    } else if (numberPeople > 12) {
        price = price - price * 0.25;
    }
    if (numberPeople % 2 === 0 && season !== "Autumn") {
        price = price - price * 0.05;
    }
    let moneyLeft = Math.abs(rentShip - price)

    if (rentShip >= price) {
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`)

    } else {
        console.log(`Not enough money! You need ${moneyLeft.toFixed(2)} leva.`)
    }


}

fishingBoat(["3000", "Summer", "11"])