function fuelTank(input) {
    let fuel = input[0];
    let litersFuel = Number(input[1]);

    if (fuel === "Diesel" || fuel === "Gasoline" || fuel === "Gas") {
        // Преобразуваме горивото до малки букви за изхода
        let fuelLowerCase = fuel.toLowerCase();
        if (litersFuel >= 25) {
            console.log(`You have enough ${fuelLowerCase}.`);
        } else  {
            console.log(`Fill your tank with ${fuelLowerCase}!`);
        }
    } else {
        console.log("Invalid fuel!");
    }
}

fuelTank(["Diesel", "10"])
fuelTank(["Gasoline", "40"])
fuelTank(["Gas", "25"])
fuelTank(["Kerosene", "200"])

