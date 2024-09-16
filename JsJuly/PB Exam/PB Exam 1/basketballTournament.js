function tournamentOfBasketball(input) {

    let index = 0
    let currentIndex = input[index]


    let desiWins = 0
    let desiLose = 0
    let totalTournamentGames = 0


    while (currentIndex !== `End of tournaments`) {

        let tournamentName = input[index++]

        let numberOfTournament = Number(input[index++])

        for (let i = 1; i <= numberOfTournament; i++) {

            totalTournamentGames++
            desiPointsCurrent = 0
            enemyPointsCurrent = 0

            let desiPoints = Number(input[index++])

            let enemyPoints = Number(input[index])

            desiPointsCurrent += desiPoints
            enemyPointsCurrent += enemyPoints


            if (desiPointsCurrent > enemyPointsCurrent) {
                desiWins++
                console.log(`Game ${i} of tournament ${tournamentName}: win with ${desiPointsCurrent - enemyPointsCurrent} points.`);
            } else {
                desiLose++
                console.log(`Game ${i} of tournament ${tournamentName}: lost with ${enemyPointsCurrent - desiPointsCurrent} points.`);
            }
            index++
            currentIndex = input[index]

        }
      
}

    console.log(`${(desiWins / totalTournamentGames*100).toFixed(2)}% matches win`);
    console.log(`${(desiLose / totalTournamentGames * 100).toFixed(2)}% matches lost`);
    
    
   
}






tournamentOfBasketball(["Ballers",
    "3",
    "87",
    "63",
    "56",
    "65",
    "75",
    "64",
    "Sharks",
    "4",
    "64",
    "76",
    "65",
    "86",
    "68",
    "99",
    "45",
    "78",
    "End of tournaments"])
    