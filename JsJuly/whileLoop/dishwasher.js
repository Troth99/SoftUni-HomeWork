function dishWasher(input) {

    let washingTool = Number(input[0])
    let index = 1



    let detergent = washingTool * 750;

    let totalDishes = 0
    let totalPots = 0

    while (index < input.length) {

        let currentIndex = input[index]

        if (currentIndex === `End`) {
            break;
        }
        currentIndex = Number(input[index])

        if ((index) % 3 === 0) {
            detergent -= currentIndex * 15
            totalPots += currentIndex
        } else {
            detergent -= currentIndex * 5
            totalDishes += currentIndex
        }

        index++


        if (detergent < 0) {
            console.log(`Not enough detergent, ${(Math.abs(detergent))} ml. more necessary!`);

        }

    }

    if (detergent >= 0) {
        console.log(`Detergent was enough!`);
        console.log(`${totalDishes} dishes and ${totalPots} pots were washed.`);
        console.log(`Leftover detergent ${detergent} ml.`);

    }



}

dishWasher(["2", "53", "65", "55", "End"])
//dishWasher ([`1` ,`10`,`15`,`10`,`12`,`13`,`30`])
