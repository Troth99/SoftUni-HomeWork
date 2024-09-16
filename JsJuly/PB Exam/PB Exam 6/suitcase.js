function suitcase(input) {

    let index = 0
    let capacity = Number(input[index++]);
    let currentIndex = input[index]

    let suits = 0

    while (currentIndex !== `End`) {

        currentIndex = Number(currentIndex);

        if (index % 3 === 0) {
            currentIndex += currentIndex * 0.10
        }
        capacity -= currentIndex
       


        index++
        currentIndex = input[index]
        if (capacity < 0) {
            break;
        }
        suits++
    }
    if (currentIndex === `End`) {
        console.log(`Congratulations! All suitcases are loaded!`);
        console.log(`Statistic: ${suits} suitcases loaded.`);
    } else {
        console.log(`No more space!`);
        console.log(`Statistic: ${suits} suitcases loaded.`);
    }
}


suitcase(["700.5",
    "180",
    "340.6",
    "126",
    "220"])
    
