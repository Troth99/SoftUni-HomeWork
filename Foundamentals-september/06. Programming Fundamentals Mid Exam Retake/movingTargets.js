function movingTargets(arr){
  
let sequences = arr[0].split(` `).map(n => Number(n))

for (let i = 1; i < arr.length; i++){

    let currentElement = arr[i]

    if(currentElement === `End`){
        break;
    }

    let  commandInfo = currentElement.split(` `)
    let commandType = commandInfo[0];
    let index = +commandInfo[1]
    let action = +commandInfo[2]

    let invalidIndex = (index >= 0) && (index < sequences.length)

    if (commandType === `Shoot`){

        if (invalidIndex){
            sequences[index] -= action

            if (sequences[index] <=0){
                sequences.splice(index, 1)
            }
        }
    }else if (commandType === `Add`){

        if (!invalidIndex){
            console.log(`Invalid placement!`);
            continue;
        }
        sequences.splice(index, 0 , action)

    }else if (commandType === `Strike`){

        let leftIndex = index - action
        let rightIndex = index + action

        let isLeftIndexInRange = leftIndex >= 0
        let isRightIndexInRange = rightIndex < sequences.length

        if (!isLeftIndexInRange || !isRightIndexInRange || !invalidIndex){
            console.log(`Strike missed!`);
            continue
            
        }
        let deleteElements = rightIndex - leftIndex +1
        sequences.splice(leftIndex, deleteElements)
    }

 
    

}

console.log(sequences.join(`|`));


}

movingTargets(["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"])

movingTargets(["1 2 3 4 5",
    "Strike 0 1",
    "End"])
    
    


