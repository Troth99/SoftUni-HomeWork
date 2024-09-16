function nameGame(input){

let index = 0
let currentIndex = input[index]




let name = ``;
let pointsLead = Number.NEGATIVE_INFINITY


while(currentIndex !== `Stop`){

    let currentName = input[index]
    let points = 0;

    for (let nameLength = 0; nameLength < currentName.length; nameLength++){

        let asciiName = currentName.charCodeAt(nameLength)

        let currentNumber = Number(input[++index])

        if (asciiName === currentNumber){
            points += 10
        }else if (asciiName !== currentNumber){
            points += 2
        }
        
        currentIndex = input[index]

    }

    if (points >= pointsLead){
        pointsLead = points
        name = currentName
    }


    index++
    currentIndex = input[index]

}

console.log(`The winner is ${name} with ${pointsLead} points!`)

}


nameGame(["Pesho",
    "124",
    "34",
    "111",
    "97",
    "99",
    "Gosho",
    "98",
    "124",
    "88",
    "76",
    "18",
    "Stop"])
    
    