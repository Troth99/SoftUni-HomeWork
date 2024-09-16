function tournamentGame(input) {

    let index = 0;
    let tournamentDays = Number(input[index++])
    let currentIndex = input[index++]

    let moneyWon = 0
    let losses = 0
    let winMoney = 0
    let winDays = 0
    let totalWins = 0
    let totalLoses = 0

   for (let i = 0; i <= tournamentDays; i++){
   
    if (winDays > losses){
        moneyWon += winMoney * 0.10
       
    }
    winMoney = 0
    losses = 0
    winDays = 0
    

    while (index < input.length) {

        let currentElement = input[index]

        if (currentElement === `Finish`){
            break;
        }
        switch (currentElement) {
            case `win`:
                winMoney += 20;
                moneyWon += 20
                winDays++
                totalWins++
                break;
            case `lose`:
                losses++
                totalLoses++
        }
       currentIndex = input[index++]

    }
   
    currentIndex = input[index++]
   }

   if (totalWins> totalLoses){
        moneyWon += moneyWon * 0.20
        console.log(`You won the tournament! Total raised money: ${moneyWon.toFixed(2)}`);
   }else{
        console.log(`You lost the tournament! Total raised money: ${moneyWon.toFixed(2)}`);
        
   }

   
}
   


tournamentGame(["2",
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
    
    
    