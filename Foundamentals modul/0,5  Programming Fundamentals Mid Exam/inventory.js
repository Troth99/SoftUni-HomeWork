function solve(arr){


let inventory = arr.shift().split(`, `)

for (let i = 0; i < arr.length; i++){
    
    let element = arr[i]

    if (element === `Craft!`){
        break;
    }

    let command = element.split(` - `)
    let action = command[0]
    let item = command[1]

    let isItExist = inventory.includes(item)

    if (action === `Collect`){

        if (isItExist){
            continue
        }
        inventory.push(item)
    }else if ( action === `Drop`){

        if (!isItExist){
            continue
        }
        let findIndexOfAnItem = inventory.indexOf(item)
        inventory.splice(findIndexOfAnItem, 1)
    }else if ( action === `Combine Items`){
        let items = item.split(`:`)
        let oldItem = items[0]
        let newItem = items[1]
        let checkOldItem = inventory.includes(oldItem)
        if (!checkOldItem){
            continue
        }
        let indexOfTHeOldItem = inventory.indexOf(oldItem)
        inventory.splice(indexOfTHeOldItem +1 , 0 , newItem)

    }else if ( action === `Renew`){

        if (!isItExist){
            continue
        }

        let findTheIndex = inventory.indexOf(item)
        let temp = inventory.splice(findTheIndex, 1)
        let str = temp.toString()
        inventory.push(str)
        
        
        
 
    }

}

console.log(inventory.join(`, `));

}


solve([
    'Iron, Wood, Sword', 
    'Collect - Gold', 
    'Drop - Wood', 
    'Craft!'
  ]
  

  )