function rentCar(input) {

    let budget = Number(input[0]);
    let season = input[1];

    let priceCar = 0;
   

    if (budget <= 100) {
        console.log(`Economy class`);

        switch (season){
            case "Summer":
                case `Cabrio`: priceCar = budget - budget * 0.65;
                console.log(`Cabrio - ${priceCar.toFixed(2)}`)
                break;
            case 'Winter':
                case 'Jeep': priceCar = budget - budget * 0.35;
                console.log(`Jeep - ${priceCar.toFixed(2)}`)
                break;
        }
       

    } else if (budget > 100 && budget <= 500) {
        console.log(`Compact class`);

        switch (season) {
            case 'Summer':
            case 'Cabrio': priceCar = budget - budget * 0.55;
                console.log(`Cabrio - ${priceCar.toFixed(2)}`);
                break;
            case 'Winter':
            case 'Jeep': priceCar = budget - budget * 0.20;
                console.log(`Jeep - ${priceCar.toFixed(2)}`)
                break;

        }

    } else if (budget > 500) {
        console.log(`Luxury class`);
        switch (season){
            case "Summer":
            case "Winter":
                priceCar = budget - budget * 0.10;
                console.log(`Jeep - ${priceCar.toFixed(2)}`);break;
        }
    }




}

rentCar(["450", "Summer"])
rentCar(["450", "Winter"])
rentCar(["1010", "Summer"])
rentCar(["99.99", "Summer"])
rentCar(["1010", "Winter"])
rentCar(["70.50", "Winter"])
