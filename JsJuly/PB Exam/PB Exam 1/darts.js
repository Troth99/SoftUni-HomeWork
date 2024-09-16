function tennis(input) {

    let tournaments = Number(input[0]);
    let startingPoints = Number(input[1]);
    let points = 0;
    let winscounter = 0;

    for(let index = 2; index < input.length; index++){

        let currentRanking = input[index]

        switch(currentRanking){
            case 'W': points +=2000; 
            winscounter ++; break;
            case'F': points += 1200; break;
            case "SF": points += 720; break;
        }
    }
    console.log(`Final points: ${startingPoints + points}`);
    console.log(`Average points: ${Math.floor(points / tournaments)}`);
    console.log(`${(winscounter/tournaments* 100).toFixed(2) }%`)
}
tennis(["5" , "1400","F" ,"SF", "W","W","SF"])