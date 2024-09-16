function easter(input) {
    let index = 0;
    let easterBread = Number(input[index]);
    index++
    let command = input[index];
    index++
    let points = 0
    let localPoints = 0;
    let counter = 0;
    let bestChef = '';
    let bestScore = 0;

    for (let i = 0; i < easterBread; i++) {
        counter++
        points = 0;
        let chef = command
        command = input[index];
        index++;


        while (command !== 'Stop') {
            localPoints = Number(command);
            points += localPoints

            command = input[index];
            index++
        }

        console.log(`${chef} has ${points} points.`);

        if (points > bestScore) {
            bestScore = points;
            bestChef = chef
            console.log(`${chef} is the new number 1!`);
        }

        command = input[index];
        index++;
    }

    console.log(`${bestChef} won competition with ${bestScore} points!`);
}


easter(["3",
    "Chef Manchev", "10",
    "10",
    "10",
    "10",
    "Stop",
    "Natalie",
    "8",
    "2",
    "9",
    "Stop",
    "George",
    "9",
    "2",
    "4",
    "2",
    "Stop"])

