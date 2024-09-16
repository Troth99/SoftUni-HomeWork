function logistic(input) {

    let index = 0;
    let totalCargo = Number(input[index]);
    index++;


    let totalTones = 0;
    let cargoSum = 0;

    let bus = 0;
    let train = 0;
    let truck = 0;


    for (let i = 1; i <= totalCargo; i++) {

        let currentCargo = Number(input[i])

        totalTones += currentCargo

        if (currentCargo <= 3) {
            bus += currentCargo
            cargoSum += currentCargo * 200
            
        }
        else if (currentCargo >= 4 && currentCargo <= 11) {
            truck += currentCargo
            cargoSum += currentCargo * 175

        } else if (currentCargo >= 12) {
            train += currentCargo
            cargoSum += currentCargo * 120
        }
        

    }
    let Sum = cargoSum / totalTones

    let busPercentage = (bus / totalTones) * 100;
    let truckPercentage = (truck / totalTones) * 100;
    let trainPercentage = (train / totalTones) * 100;

    console.log(Sum.toFixed(2))
    console.log(`${busPercentage.toFixed(2)}%`)
    console.log(`${truckPercentage.toFixed(2)}%`);
    console.log(`${trainPercentage.toFixed(2)}%`);
}

//logistic(["4", "1", "5", " 16", "3"])
logistic(["5", "2", "10", " 20", "1" , "7"])