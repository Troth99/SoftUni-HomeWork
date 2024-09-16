function everest(input){

let index = 0

let currentInput = input[index]

let camp = 5364;

let = totalAim = 8848

let daysCounter = 1

while(currentInput !== `END`){

    
     let atanasSleepOver = input[index++]
    let mettersForTheDay = Number(input[index])
    if (atanasSleepOver === `Yes`){
        daysCounter++
    }
    if (daysCounter > 5){
        break;
    }

    camp += mettersForTheDay
    if (camp >= totalAim){
        break;
    }
    
    index++
    currentInput = input[index]
}

if (camp >= totalAim){
    console.log(`Goal reached for ${daysCounter} days!`);
}else{
    console.log(`Failed!`);
    console.log(`${camp}`);
}

}



everest(["Yes",
    "1254",
    "Yes",
    "1402",
    "No",
    "250",
    "Yes",
    "635"])
    
    

    