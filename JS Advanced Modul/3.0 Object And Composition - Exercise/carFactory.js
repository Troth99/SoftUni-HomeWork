function carFactory(car){

    if (car.power <= 90){
        if (car.power){
            delete car.power
        }
        car.engine = {power: 90,
            volume: 1800,
        };
    }else if (car.power > 90 && car.power < 200 ){
        if (car.power){
            delete car.power
        }
        car.engine = {power: 120,
            volume: 2400,
        };
    }else if (car.power >= 200){
        if (car.power){
            delete car.power
        }
        car.engine = {power :200,
            volume : 3500,
        };
    }


    if (car.carriage === 'hatchback'){
        let carColor = car.color
        if (car.color){
            delete car.color
        }
        car.carriage = {type: 'hatchback',
            color: carColor,
        }
    }else if ( car.carriage === 'coupe'){
        let carColor = car.color
        if(car.color){
            delete car.color
        }
        car.carriage = {type: 'coupe',
            color: carColor
        }
    }
  let carWheelType = car.wheelsize;
  if (car.wheelsize){
    delete car.wheelsize
  }

  let carWheels = []

  let number = carWheelType % 2 === 0 ? carWheelType - 1: carWheelType

  for (let i = 0; i < 4; i++){
    carWheels.push(number)
  }
 car.wheels = carWheels
  


return car

}

console.log(carFactory({ model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17 }
  
  ))
