function carSum(arr){


    let numberOfCars = Number(arr.shift())

    let cars = {}

    for (let i = 0 ; i < numberOfCars; i++){

        let [car, mileage, fuel] = arr[i].split(`|`)
        mileage = Number(mileage)
        fuel = Number(fuel)
        cars[car] = {mileage, fuel}
        

    }
    arr.splice(0, numberOfCars)

    let commmand = arr.shift()

    while (commmand !== `Stop`){

        let cmdInfo = commmand.split(` : `)
        let action = cmdInfo[0].toLowerCase()

        if(action === `drive`){

            let carType = cmdInfo[1]
            let distance = Number(cmdInfo[2])
            let fuel = Number(cmdInfo[3])

            if (carType in cars){

                let fuelInTheTank = cars[carType].fuel
                if (fuelInTheTank >= fuel){
                    cars[carType].mileage += distance
                    cars[carType].fuel -= fuel
                   
                    console.log(`${carType} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
                    
                    if (cars[carType].mileage >= 100000){
                        delete cars[carType]
                        console.log(`Time to sell the ${carType}!`);
                        
                    }
                    
                }else {
                    console.log(`Not enough fuel to make that ride`);
                    
                }
                
            }
             
        }else if (action === `refuel`){

            let carType = cmdInfo[1]
            let fuel = Number(cmdInfo[2])
            
            let currentCarTypeTankFuel = cars[carType].fuel

       
                let freeSpace = 75 - currentCarTypeTankFuel
                let refuel = Math.min(fuel, freeSpace)

                cars[carType].fuel += refuel
                console.log(`${carType} refueled with ${refuel} liters`);
                
          
        }else if (action === `revert`){
            let carType = cmdInfo[1]
            let kilometers = Number(cmdInfo[2])

            cars[carType].mileage -= kilometers

            if (cars[carType].mileage < 10000){
                cars[carType].mileage = 10000
            }else {
                console.log(`${carType} mileage decreased by ${kilometers} kilometers`);
                
            }
        }
       
        commmand = arr.shift()
    }
    
let entries = Object.entries(cars)
for (let info of entries){
    
    let car = info[0]
    let miliage = info[1].mileage
    let fuel = info[1].fuel
    console.log(`${car} -> Mileage: ${miliage} kms, Fuel in the tank: ${fuel} lt.`);
    
    
}




}

carSum([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ]
  
  )