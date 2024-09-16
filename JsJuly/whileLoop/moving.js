function moving(input) {

    let index = 0
    let h = Number(input[index++]);
    let l = Number(input[index++]);
    let w = Number(input[index++])

    let totalPlace = h * l * w
    let sumNeeded = 0

    let currentElement = input[index]

    while (currentElement !== 'Done') {

        currentElement = input[index]

        if (currentElement === `Done`) {
            let cubicMetersLeft = Math.abs(totalPlace)
            console.log(`${cubicMetersLeft} Cubic meters left.`);
            break;
        }
        if (totalPlace <= 0) {
            let cubicMettersNeeded = Math.abs(totalPlace)
            console.log(`No more free space! You need ${cubicMettersNeeded} Cubic meters more.`);
            break;
        }

        currentElement = Number(input[index])


        totalPlace -= currentElement
        sumNeeded += currentElement
        index++


    }



}





moving(["10",
    "1",
    "2",
    "4",
    "6",
    "Done"])

