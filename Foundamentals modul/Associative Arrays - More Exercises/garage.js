function garage(arr){

let garageCars = {}
for (let carInfo of arr){

    let [garageNumber, carDetails] = carInfo.split(` - `)

    if (!garageCars[garageNumber]){
        garageCars[garageNumber] = []

    }

    garageCars[garageNumber].push(carDetails)
}

for (let garageNumber in garageCars){
    console.log(`Garage № ${garageNumber}`);
    
    for (let carInfo of garageCars[garageNumber]){

        console.log(`--- ${carInfo.replace(/: /g, ` - `)}`);
        
    }
}


}

garage(['1 - color: green, fuel type: petrol',
    '1 - color: dark red, manufacture: WV',
    '2 - fuel type: diesel',
    '3 - color: dark blue, fuel type: petrol']
    )