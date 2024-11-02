function minerTask(arr){


    let materialQuantities = {}


    for (let i = 0; i < arr.length; i += 2){

        let resource = arr[i]
        let quantitie = Number(arr[i+1])

        if (resource in materialQuantities){
            materialQuantities[resource] += quantitie
        }else {
            materialQuantities[resource] = quantitie
        }


    }

    let entries = Object.entries(materialQuantities)

    for (let print of entries){
        console.log(`${print[0]} -> ${print[1]}`);
        
    }


}


minerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]
    )