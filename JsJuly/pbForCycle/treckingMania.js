function treckingMania(input) {

    let index = 0;
    let numberOfgroups = Number(input[index]);
    index++;

    let totalPeople = 0;

    let totalMusala = 0;
    let totalMonblan = 0;
    let totalKilimanjaro = 0;
    let totalK2 = 0;
    let totalEverest = 0

    for (i = 0; i < numberOfgroups; i++) {

        let currentGroup = Number(input[index]);
        index++

        totalPeople += currentGroup

        if (currentGroup <=5){
            totalMusala += currentGroup
        } else if (currentGroup >= 6 && currentGroup <= 12){
            totalMonblan += currentGroup
        } else if (currentGroup >= 13 && currentGroup <= 25){
            totalKilimanjaro += currentGroup
        }else if (currentGroup >= 26 && currentGroup <= 40){
            totalK2 += currentGroup
        }else if (currentGroup >= 41){
            totalEverest += currentGroup
        }
}
    let percentageMusala = (totalMusala / totalPeople) *100;
    let percentageMonblan = (totalMonblan / totalPeople) * 100;
    let percentageKilimanjaro = (totalKilimanjaro / totalPeople) * 100;
    let percentageK2 = (totalK2 / totalPeople)*100;
    let percentageEverest = (totalEverest / totalPeople) * 100

    console.log(percentageMusala.toFixed(2) + "%");
    console.log(percentageMonblan.toFixed(2) + "%");
    console.log(percentageKilimanjaro.toFixed(2) + "%");
    console.log(percentageK2.toFixed(2) + "%");
    console.log(percentageEverest.toFixed(2) + "%");

}

treckingMania(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"])
