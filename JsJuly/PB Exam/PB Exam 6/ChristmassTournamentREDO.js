function christmassTournament(input){

let index = 0
let days = Number(input[index++])

let currentElement = input[index]

let totalWinsCount = 0
let totalLoseCount = 0

let totalSum = 0

for (let i = 1; i <= days; i++){

    let dayLoseCount = 0
    let dayWinCOunt = 0
    let sumDay = 0
    while (currentElement !== `Finish`){

    let currentSport = input[index++]

    let currentStatus = input[index]
    if (currentStatus === `win`){
        totalWinsCount++
        dayWinCOunt++
        sumDay += 20
        totalSum += 20
    }else {
        totalLoseCount++
        dayLoseCount++
    }

    index++
    currentElement = input[index]
    
}


    
    if (dayWinCOunt > dayLoseCount){
        totalSum = totalSum + sumDay* 0.10
       
    }
    index++
    currentElement = input[index]
    }


    if (totalWinsCount > totalLoseCount){
        totalSum = totalSum + totalSum * 0.20
        console.log(`You won the tournament! Total raised money: ${totalSum.toFixed(2)}`);
    }else {
        console.log(`You lost the tournament! Total raised money: ${totalSum.toFixed(2)}`);
        
    }
}


christmassTournament(["2",
    "volleyball",
    "win",
    "football",
    "lose",
    "basketball",
    "win",
    "Finish",
    "golf",
    "win",
    "tennis",
    "win",
    "badminton",
    "win",
    "Finish"])
    
    