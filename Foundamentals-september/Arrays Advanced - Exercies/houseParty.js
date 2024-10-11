function trackOfGuests(arr){

    let newArr = []
    for (let command of arr){

        let firstElement = command

        if (firstElement.includes(`is going!`)){

            let name = command.split(` `)[0]

            let includes = newArr.includes(name)
            if (!includes){
                newArr.push(name)
            }else {
                console.log(`${name} is already in the list!`);
                
            }
        }else if (firstElement.includes(`is not going!`)){

            let name = command.split(` `)[0]

            if (!newArr.includes(name)){
                console.log(`${name} is not in the list!`);
                
            }else {
                let index = newArr.indexOf(name)
                newArr.splice(index, 1)
            }
        }
     


    }


console.log(newArr.join(`\n`));




}

/*trackOfGuests(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']
    )*/

    trackOfGuests(['Tom is going!',
        'Annie is going!',
        'Tom is going!',
        'Garry is going!',
        'Jerry is going!']
        )