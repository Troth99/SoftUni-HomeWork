function seriesCalculator(input){

    let seriesName = input[0];
    let seasons = Number(input[1]);
    let episodes = Number(input[2]);
    let timePerEpisode = Number(input[3]);

    let adPerEpisode = timePerEpisode - timePerEpisode * 0.80;

    let extendedEpisode = timePerEpisode + adPerEpisode
    let addedTime = seasons * 10

    let totalTime =  extendedEpisode * episodes * seasons + addedTime

    
    

    console.log(`Total time needed to watch the ${seriesName} series is ${Math.floor(totalTime)} minutes.`);
    


}

seriesCalculator(["Lucifer",
    "3",
    "18",
    "55"])
    