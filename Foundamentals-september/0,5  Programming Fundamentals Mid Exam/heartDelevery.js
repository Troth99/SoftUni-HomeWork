function heartDelivery(arr){

    let heartsGiven = arr.shift().split(`@`).map(number => Number(number))

    let command =arr.shift()

    let currentCupidPosition = 0

    while(command !== `Love!`){

       
        let indexInfo = command.split(` `)
        let action = indexInfo[0]
        let indexJump = Number(indexInfo[1])

        currentCupidPosition += indexJump

        if (currentCupidPosition >= heartsGiven.length){
           currentCupidPosition = 0
        
        }
        if(heartsGiven[currentCupidPosition] === 0){
            console.log(`Place ${currentCupidPosition} already had Valentine's day.`);
            command = arr.shift()
            continue
            
        }else {
            heartsGiven[currentCupidPosition] -= 2
        }

        if (heartsGiven[currentCupidPosition] === 0){
            
            console.log(`Place ${currentCupidPosition} has Valentine's day.` );
            
        }


        command = arr.shift()
    }

console.log(`Cupid's last position was ${currentCupidPosition}.`);

let housesHad = heartsGiven.filter(houseHeartsNeeded => houseHeartsNeeded !== 0)

if (housesHad.length === 0){
    console.log(`Mission was successful.`);
    
}else {
    console.log(`Cupid has failed ${housesHad.length} places.`);
    
}






}


heartDelivery(["10@10@10@2",
    "Jump 1",
    "Jump 2",
    "Love!"])
    
    
    