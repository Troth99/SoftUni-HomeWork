function arrayManipulation(arr){

let firstElement = arr.shift().split(` `).map(x => Number(x))

    for (let command of arr){

        let tokens = command.split(` `)
        let action = tokens.shift()

        if(action === `Add`){
            let numToAdd = +tokens.shift()
            firstElement.push(numToAdd)
        }else if (action ===`Remove`){
            let numToRemove = +tokens.shift()
            let index = firstElement.indexOf(numToRemove)

            while (index !== -1){

            firstElement.splice(index, 1)
            index = firstElement.indexOf(numToRemove)
            }
        }else if ( action === `RemoveAt`){
            let index = +tokens.shift()
            firstElement.splice(index, 1);
        }else if ( action === `Insert`){
            let numToadd = +tokens.shift()
            let indexToAdd = +tokens.shift()

            firstElement.splice(indexToAdd, 0, numToadd)
        }
    }
    console.log(firstElement.join(` `));
    
}


arrayManipulation(['6 12 2 65 6 42',
    'Add 8',
    'Remove 12',
    'RemoveAt 3',
    'Insert 6 2']
    )