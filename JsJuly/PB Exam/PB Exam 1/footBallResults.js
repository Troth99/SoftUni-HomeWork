function footBall(input){

    let firstResult = (input);
    let result2= (input[1]);
    let result3 = (input);

    let wins = 0;
    let lose = 0;
    let draw = 0;

    let firstResult1 = firstResult.substring(0, 1);
    let firstResult2 = firstResult.substring(2, 3);

    if (firstResult1 > firstResult2) {
        wins++;
    } else if (firstResult1 < firstResult2) {
        lose++;

    }
    else if (firstResult1== firstResult2) {
        draw++;
    }

   

    if (result2 > result2){
        wins++;
    } else if (result2 < result2) {
        lose++;
    } else if (result2==result2){
        draw++;
    }
 
    if (result3 > result3) {
        wins++;
    } else if (result3 < result3) {
        lose++;
    }  else if (result3==result3){

        draw++;
    }

    console.log(`Team won ${wins} games.`);
    console.log(`Team lost ${lose} games.`);
    console.log(`Drawn games: ${draw}`);

}
footBall(["3:1" , "0:2" , " 0:0"])