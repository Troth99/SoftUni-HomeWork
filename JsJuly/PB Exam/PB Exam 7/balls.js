function balls(input){


    let index = 0;
    let numberOfBalls = Number(input[index++])

    let otherColors = 0

    let totalPoints = 0

    let whiteNum = 0
    let redNum = 0
    let orangeNum = 0
    let blackNum = 0
    let yellowNum = 0
    

    for (let i = 0; i < numberOfBalls; i++){

        let currentIndex = input[index]
        index++
        
        switch(currentIndex){
            case `red`:
                totalPoints += 5
                redNum++
            break;
            case `orange`:
                totalPoints +=  10
                orangeNum++
            break;
            case `yellow`:
                totalPoints +=  15
                yellowNum++
            break;
            case `white`:
               totalPoints +=  20
                whiteNum ++
            break;
            case `black`:
              totalPoints /= 2
                blackNum ++
                break;
            default:
                otherColors ++
        }

        

    }
    

console.log(`Total points: ${Math.floor(totalPoints)}`);
console.log(`Red balls: ${redNum}`);
console.log(`Orange balls: ${orangeNum}`);
console.log(`Yellow balls: ${yellowNum}`);
console.log(`White balls: ${whiteNum}`);
console.log(`Other colors picked: ${otherColors}`);
console.log(`Divides from black balls: ${Math.floor(blackNum)}`);








}

balls([`10`,`white`,`white`,`ee`,`red`,
   `orange`,
    `red`,
    `black`,
    `black`,
    `black`,
    `black`])
    
    