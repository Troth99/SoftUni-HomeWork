function FootBallTournament(input){

    let index = 0
    let footBallTeamName = input[index]
    index++
    let numberOfGamesPlayer = Number(input[index++])

    let points = 0

    let w = 0
    let l = 0
    let d = 0

    for (let i = 0; i < numberOfGamesPlayer; i++){

        let currentIndex = input[index]
        index++

        switch(currentIndex){
            case `W` :
                points += 3
                w++
                break;  
            case 'D' :
                points += 1
                d++
                break;
            case `L` :
                points += 0
                l++
                break;
        }   
    }

    if (numberOfGamesPlayer <= 0){
        console.log(`${footBallTeamName} hasn't played any games during this season.`);
        
    }else {
        let percentage = w * 100 /numberOfGamesPlayer
        console.log(`${footBallTeamName} has won ${points} points during this season.`);
        console.log(`Total stats:`);
        console.log(`## W: ${w}`);
        console.log(`## D: ${d}`);
        console.log(`## L: ${l}`);
        console.log(`Win rate: ${percentage.toFixed(2)}%`);
        

    }

}

FootBallTournament(["Chelsea",
    "0"])
    
    