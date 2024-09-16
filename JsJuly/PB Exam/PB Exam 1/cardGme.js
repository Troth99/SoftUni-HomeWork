function cardGame(input) {

    let index = 0;
    let player1Name = input[index];
    index++
    let player2Name = input[index];
    index++

    let playerOnePoints = 0
    let playerTwoPoints = 0
    let cardPoints = 0

    for (i = 0; i < input.length; i++) {

        let command = input[index]

        if (command ===  `End of game`){
            console.log(`${player1Name} has ${playerOnePoints} points`);
            console.log(`${player2Name} has ${playerTwoPoints} points`);
            break;
        }
       
        let player1Card = Number(input[index])
        index++
        let player2Card = Number(input[index])
        index++

       
        if (player1Card > player2Card) {
            cardPoints = player1Card - player2Card
            playerOnePoints += cardPoints

        } else if (player2Card > player1Card) {
            cardPoints = player2Card - player1Card
            playerTwoPoints += cardPoints

        } else  {
            console.log(`Number wars!`)
            player1Card = Number(input[index++]);
            player2Card = Number(input[index++]);

                if (player1Card > player2Card) {
                console.log(`${player1Name} is winner with ${playerOnePoints} points`);
            } else {
                console.log(`${player2Name} is winner with ${playerTwoPoints} points`);
            }break;
      }

    

    }
  
   

}

cardGame(["Desi",
    "Niki",
    "7",
    "5",
    "3",
    "4",
    "3",
    "3",
    "5",
    "3"])
     /*cardGame(["Elena",
        "Simeon",
        "6",
        "3",
        "2",
        "5",
        "8",
        "9",
        "End of game"]) 
    /*cardGame(["Aleks",
        "Georgi",
        "4",
        "5",
        "3",
        "2",
        "4",
        "3",
        "4",
        "4",
        "5",
        "2"]) */
        
        
