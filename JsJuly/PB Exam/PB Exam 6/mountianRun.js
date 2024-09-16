function mountainRun(input){

    let recordPerSeconds = Number(input[0]);
    let distanceInMetters = Number(input[1]);
    let timeInSeconds = Number(input[2]);

    let climbingInSeconds = distanceInMetters * timeInSeconds;
    
    let slowPer50 = Math.floor(distanceInMetters / 50) * 30

    let totalTime = climbingInSeconds + slowPer50

    if (recordPerSeconds <= totalTime){
        let secondsNeeded = Math.abs(totalTime - recordPerSeconds)
        console.log(`No! He was ${secondsNeeded.toFixed(2)} seconds slower.`);
    }else {
        console.log(`Yes! The new record is ${Math.abs(totalTime).toFixed(2)} seconds.`);
        
    }


}


mountainRun(["1377",
    "389",
    "3"])
    
    