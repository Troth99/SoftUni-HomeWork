function train (arr){
 
    let wagonNumbers = arr.shift().split(` `).map(x => Number(x))

    let maxCapacity = arr.shift()

    for (let command of arr){

        
        let firstElement = command.split(` `)
        
        if (firstElement.includes(`Add`)){

            let passengers = +command.split(` `)[1]
         
            wagonNumbers.push(passengers)
            continue
        }

            let nextCommand = +command
            maxCapacity = +maxCapacity

            for (let i = 0 ; i < wagonNumbers.length; i++){

                let toCheck = wagonNumbers[i]
               
                if ((nextCommand + toCheck <= maxCapacity)){

                    toCheck += nextCommand

                    wagonNumbers.splice(i , 1 , toCheck)
                    break;
                }
                
            }
    
           
        }

        console.log(wagonNumbers.join(` `));
        
}



train (['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6']
    
    )