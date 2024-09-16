function renovate(input) {

    let index = 0;
    let h = Number(input[index])
    index++
    let w = Number(input[index]);
    index++
    let unpaintedPercent = Number(input[index])
    index++




    let totalCover = h * w * 4
    let wallsToPaint = totalCover - totalCover * unpaintedPercent / 100;


    for (let i = 0; i < input.length; i++) {

        let currentIndex = Number(input[index]);
        index++


        wallsToPaint -= currentIndex


        let command = input[index];
    

        if (command === `Tired!`) {
            console.log(`${wallsToPaint} quadratic m left.`);
            break;
        }
        if (wallsToPaint < 0) {
            console.log(`All walls are painted and you have ${Math.abs(wallsToPaint)} l paint left!`);
            break;
        }
        if (wallsToPaint === 0) {
            console.log(`All walls are painted! Great job, Pesho!`);
            break;

        }
    }

}

renovate(["2",
    "3",
    "25",
    "6",
    "7",
    "8"])

