function movieDay(input){

    let timePerPics = Number(input[0]);
    let numberOfScenes = Number(input[1]);
    let sceneDuration = Number(input[2]);

    let preparation = timePerPics * 0.15;
    let timeForPhotos = numberOfScenes * sceneDuration

    let neededTime = preparation + timeForPhotos

    if (neededTime <= timePerPics){
        let timeLeft = Math.round(timePerPics-neededTime)
        console.log(`You managed to finish the movie on time! You have ${Math.abs(timeLeft)} minutes left!`);
        
    }else {
        let timeNeeded = Math.abs(neededTime - timePerPics)
        console.log(`Time is up! To complete the movie you need ${timeNeeded} minutes.`);
        
    }



}

movieDay(["60",
    "15",
    "3"])
    
    