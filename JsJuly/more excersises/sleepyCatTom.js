function sleepyCatTom(input){

    let restDays = (input[0]);

    let restDaysPerDay = restDays * 127; //Минути през почивни дни
    let workDays = (365 - restDays) *63; //Минути през работни дни

    let totalHoursPlay = restDaysPerDay + workDays
   

    let totalTomHours =  30000 - totalHoursPlay;
    let tomHours= Math.trunc(totalTomHours /60);
    let tomMinutes = totalTomHours % 60;

    if (30000 > totalHoursPlay){
        console.log(`Tom sleeps well`);
        console.log(`${tomHours.toFixed(0)} hours and ${tomMinutes} minutes less for play`)
    }else {
        console.log(`Tom will run away`);
        console.log(`${Math.abs(tomHours)} hours and ${Math.abs(tomMinutes)} minutes more for play`)

    }

    
    



}
sleepyCatTom(["20"])
sleepyCatTom(["113"])
