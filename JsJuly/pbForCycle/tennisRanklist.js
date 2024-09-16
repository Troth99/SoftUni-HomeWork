function rankListTennis(input) {

    let index = 0;
    let tournamentCount = Number(input[index]);
    index++;
    let startPoints = Number(input[index]);
    index++;


    let winsCount = 0
    let points = 0


    for (i = 0; i < tournamentCount; i++) {

        let currentStatus = input[index];
        index++

        switch (currentStatus) {
            case "W":
                points += 2000;
                winsCount++
                break;
            case "F":
                points += 1200;

                break;
            case "SF":
                points += 720;

                break;
        }

   


    }
    let percentage = winsCount / tournamentCount * 100
    console.log(`Final points: ${startPoints + points}`);
    console.log(`Average points: ${Math.floor(points / tournamentCount)}`);
    console.log((percentage).toFixed(2) + '%');


}

/*rankListTennis(["5",
    "1400",
    "F",
    "SF",
    "W",
    "W",
    "SF"]) */
rankListTennis(["7",
    "1200",
    "SF",
    "F",
    "W",
    "F",
    "W",
    "SF",
    "W"])
    

