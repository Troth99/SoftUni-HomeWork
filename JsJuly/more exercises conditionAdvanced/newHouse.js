function newHouse(input) {

    let flowerType = input[0];
    let flowerNumber = Number(input[1]);
    let budget = Number(input[2]);

    let price = 0;

    switch (flowerType) {
        case "Roses": price = flowerNumber * 5.00; break;
        case "Dahlias": price = flowerNumber * 3.80; break;
        case "Tulips": price = flowerNumber * 2.80; break;
        case "Narcissus": price = flowerNumber * 3.00; break;
        case "Gladiolus": price = flowerNumber * 2.50; break;

    }
    if (flowerNumber > 80 && flowerType === "Roses") {
        price = price - price * 0.1;
    } else if (flowerNumber > 90 && flowerType === "Dahlias") {
        price = price - price * 0.15;

    } else if (flowerNumber > 80 && flowerType === "Tulips") {
        price = price - price * 0.15;
    } else if (flowerNumber < 120 && flowerType === "Narcissus") {
        price = price + price * 0.15;
    } else if (flowerNumber < 80 && flowerType === "Gladiolus") {
        price = price + price * 0.20;
    }

    let sumLeft = Math.abs(budget - price);
    if (budget < price) {
        console.log(`Not enough money, you need ${sumLeft.toFixed(2)} leva more.`)
    } else if (budget >= price) {
        console.log(`Hey, you have a great garden with ${flowerNumber} ${flowerType} and ${sumLeft.toFixed(2)} leva left.`)
    }

}

newHouse(["Roses", "55", "250"])
newHouse(["Tulips",
    "88",
    "260"])
newHouse(["Narcissus", " 119", "360"])
