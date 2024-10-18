function solve(arr){

function fillingTheChest(action){
    
   for (let item of action){
    if(!initialLoot.includes(item)){
        initialLoot.unshift(item)
    }
   }
    
    return initialLoot
}
function droppingItems(indexOfDrop){

    
    if (indexOfDrop < 0 || indexOfDrop >= initialLoot.length){
       return initialLoot
    }else {
        let str = ``
        let index = initialLoot.splice(indexOfDrop , 1)
        str = index.shift()
        initialLoot.push(str)
        return initialLoot
    }
  

}
function summingFunction(initialLoot){
    
    let totalSum = 0
    for (let i = 0; i < initialLoot.length; i++){
        let currentElement = initialLoot[i]
        totalSum += currentElement.length
    }
    totalSum = totalSum / initialLoot.length
  
    return totalSum
}

let initialLoot = arr.shift().split(`|`)

for (let command of arr){


    let action = command.split(` `)

    if (action[0] === `Loot`){

        action.shift()
        
       fillingTheChest(action)
       

    }else if(action[0] === `Drop`){
        
        action.shift()

        let indexOfDrop = +action[0]
        let dropItems = droppingItems(indexOfDrop)
        initialLoot = dropItems
    
    }else if (action[0] === `Steal`){

        action.shift()

        let count = Math.min(Number(action[0]), initialLoot.length)
        
       
        let removedItems = initialLoot.splice(-count)
        console.log(removedItems.join(`, `));
        
    
    }
   

    if (action[0] === `Yohoho!`){
        break;
}
}



if(initialLoot.length > 0){
    let sum = summingFunction(initialLoot)
    console.log( `Average treasure gain: ${sum.toFixed(2)} pirate credits.`);
    
}else {
    console.log(`Failed treasure hunt.`);
    
}

}


solve((["Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!"])
     )