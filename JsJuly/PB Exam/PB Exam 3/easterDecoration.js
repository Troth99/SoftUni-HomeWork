function easterDecoration(input){

    let index = 0;
    let clients = Number(input[index++])
    let currentElement = input[index++]

    
    let averageBill = 0
    for (let i = 0; i < clients; i++){
    let clientSum = 0
    let counter = 0

    while(currentElement !== `Finish`){

        counter++
        switch(currentElement){
            case `basket`:
                clientSum += 1.50
                break;
            case `wreath`:
                clientSum += 3.80
                break;
            case `chocolate bunny`:
                clientSum += 7
                break;
        }
        

        currentElement = input[index++]
    }

    if (counter % 2 ===0){
        clientSum -= clientSum * 0.20
    }
    console.log(`You purchased ${counter} items for ${clientSum.toFixed(2)} leva.`)
    averageBill += clientSum
    currentElement = input[index++]
    }
    

    console.log(`Average bill per client is: ${(averageBill / clients).toFixed(2)} leva.`);
    
}


easterDecoration(["1",
    "basket",
    "wreath",
    "chocolate bunny",
    "wreath",
    "basket",
    "chocolate bunny",
    "Finish"])
    
    