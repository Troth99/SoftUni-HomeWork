function shoppingList(arr) {

    let groceries = arr[0].split(`!`)



    for (let i = 1; i < arr.length; i++) {

        let currCmd = arr[i]
        if (currCmd === `Go Shopping!`) {
            break;
        }

        let currentCommand = arr[i].split(` `)
        let commandType = currentCommand[0]
        let itemName = currentCommand[1]

        let itemExist = groceries.includes(itemName)

        if (commandType === `Urgent`) {

            if (!itemExist) {
                groceries.unshift(itemName)
            }
        } else if (commandType === `Unnecessary`) {

            if (itemExist) {
                let indexOfItem = groceries.indexOf(itemName)
                groceries.splice(indexOfItem, 1)
            }
        } else if (commandType === `Correct`) {

            if (itemExist) {
                let indexOfItem = groceries.indexOf(itemName)
                let newItem = currentCommand[2]
                groceries[indexOfItem] = newItem
            }
        }else if (commandType === `Rearrange`){

            if (itemExist){
            let indexOfItem = groceries.indexOf(itemName)
            groceries.splice(indexOfItem, 1)
            groceries.push(itemName)
            }
        }



    }

console.log(groceries.join(`, `));

}


//shoppingList(["Tomatoes!Potatoes!Bread", "Unnecessary Milk", "Urgent Tomatoes", "Go Shopping!"])

 shoppingList((["Milk!Pepper!Salt!Water!Banana",
     "Urgent Salt",
     "Unnecessary Grapes",
     "Correct Pepper Onion",
     "Rearrange Grapes",
     "Correct Tomatoes Potatoes",
     "Go Shopping!"])
     )