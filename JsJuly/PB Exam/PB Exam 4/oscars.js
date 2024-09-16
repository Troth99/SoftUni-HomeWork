function oscars(input) {

    let index = 0;
    let actorName = input[index];
    index++
    let academyPoints = Number(input[index])
    index++
    let judgeNum = Number(input[index])
    index++

    let points = 0;
   

    for (let i = 0; i < judgeNum; i++) {

        let currentActor = input[index];
        index++
        let pointsByActor = Number(input[index]);
        index++

        points = ((currentActor.length * pointsByActor) / 2)
        academyPoints += points
        
        if (academyPoints > 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${academyPoints.toFixed(1)}!`);
            break;
    }
    }
    let pointsNeeded = Math.abs(1250.5 - academyPoints)

    if (academyPoints < 1250.5) {
   console.log(`Sorry, ${actorName} you need ${pointsNeeded.toFixed(1)} more!`);

}
}

oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])
