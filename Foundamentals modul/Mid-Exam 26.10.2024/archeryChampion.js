function archeryChampion(arr) {


    let targets = arr.shift().split(`|`).map(n => Number(n))

    let command = arr.shift()

    let points = 0
    while (command !== `Game over`) {


        let cmdInfo = command.split(`@`)
        let action = cmdInfo.shift()

        if (action === `Shoot Left`) {
         
            let startIndex = Number(cmdInfo[0])
            let length = Number(cmdInfo[1])
           
        
            if (startIndex < 0 || startIndex >= targets.length){
                command = arr.shift()
               continue
            }

            let newIndex = startIndex - length

            while (newIndex < 0){
                newIndex += targets.length
            }

            if (targets[newIndex] > 0){
                if (targets[newIndex] < 5){
                    points += targets[newIndex]
                    targets[newIndex] = 0
                }else {
                points += 5
                targets[newIndex] -= 5
                }
            }
            
         }else if (action === `Shoot Right`){

            let startIndex = Number(cmdInfo[0])
            let length = Number(cmdInfo[1])

            let newIndex = startIndex + length

            if (startIndex < 0 || startIndex >= targets.length){
                command = arr.shift()
                continue
            }
            while(newIndex >= targets.length){
                newIndex -= targets.length
            }
            if (targets[newIndex] > 0){
                if (targets[newIndex] < 5){
                    points += targets[newIndex]
                    targets[newIndex] = 0
                }else {
                points += 5
                targets[newIndex] -= 5
                }
            }
         }else if (action === `Reverse`){

            let reverse = targets.reverse()
            targets = reverse
         }


        command = arr.shift()
    }

    console.log(`${targets.join(` - `)}`);
    console.log(`John finished the archery tournament with ${points} points!`);
    
    


}

archeryChampion(["20|30|40|50|60",
    "Shoot Left@0@12",
    "Shoot Right@4@15",
    "Shoot Left@6@5",
    "Reverse",
    "Game over"])
    
