function picolo(arr){

let parkedCars = new Map()


for (let currentCar of arr){

    let [direction, carNumber] = currentCar.split(`, `)

    if (direction === `IN`){
        parkedCars.set(carNumber)
    }else if (direction === `OUT`){
        if (parkedCars.has(carNumber)){
            parkedCars.delete(carNumber)
        }
    }
}


let sorted = Array.from(parkedCars).sort()

if (sorted.length > 0){
    for (let car of sorted){
        console.log(car[0]);
        
    }
}else {
    console.log(`Parking Lot is Empty`);
    
}
}


picolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
    
    
    )