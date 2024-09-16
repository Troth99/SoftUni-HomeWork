function grandpaStavri(input){

    let numberOfDays = Number(input[0])

    let totalRakia = 0
    let totalDegrees = 0


    for (let index = 1; index <= numberOfDays * 2; index++){

        let rakia = Number(input[index++])

        let degrees = Number(input[index])

        totalRakia += rakia
        totalDegrees += rakia * degrees
        
        
    }

    console.log(`Liter: ${totalRakia.toFixed(2)}`);
    let averageDegrees = totalDegrees / totalRakia
    console.log(`Degrees: ${averageDegrees.toFixed(2)}`);

    if (averageDegrees < 38){
        console.log(`Not good, you should baking!`);
    }else if (averageDegrees > 38 && averageDegrees < 42){
        console.log(`Super!`);
    }else if (averageDegrees > 42){
        console.log(`Dilution with distilled water!`);
        
    }
    
    

}


grandpaStavri(["3",
    "100",
    "45",
    "50",
    "55",
    "150",
    "36"])
    