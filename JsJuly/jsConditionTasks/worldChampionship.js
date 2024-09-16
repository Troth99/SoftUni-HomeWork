function swimWorldRecord(input) {

    let seconds = Number(input[0]);
    let metters = Number(input[1]);
    let timePerMetter = Number(input[2]);

    let secondsSum = metters * timePerMetter;       
    let timePer15 = Math.floor(metters / 15) * 12.5;            
    let totalTime = secondsSum + timePer15;      
    let notEnoughTime = totalTime - seconds;

    if (seconds > totalTime) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`)
    } else  {
        console.log(`No, he failed! He was ${notEnoughTime.toFixed(2)} seconds slower.`)
    }



}

swimWorldRecord(["10464", "1500", "20"])
swimWorldRecord(["55555.67",
    "3017",
    "5.03"])
