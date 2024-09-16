function steps (input){

    let index = 0;

    let totalSteps = 0;


    while (totalSteps< 10000){

        let currentElement = input[index]

        if (currentElement === `Going home`){
            index++
            let currentElement = Number(input[index])
            totalSteps += currentElement
            break;

           }

        currentElement = Number(input[index]);
        totalSteps += currentElement
        index++

    }
    if (totalSteps >= 10000){
        let sumSteps = Math.abs(totalSteps - 10000)
        console.log(`Goal reached! Good job!`);
        console.log(`${sumSteps} steps over the goal!`);
    }else if (totalSteps < 10000){
        let difference = Math.abs(10000-totalSteps)
        console.log(`${difference} more steps to reach goal.`);
        
    }

}

/*steps(["1500",
    "300",
    "2500",
    "3000",
    "Going home",
    "200"])*/
    steps(["125",
        "250",
        "4000",
        "30",
        "2678",
        "4682"])
        
        
    