function roadRadar(speed, area){
speed = Number(speed);

function status(speed, area){

let drivingStatus = '';
let overSpeed = 0;
if (area === 'city'){
    if (speed - 50 <= 20){
        overSpeed = speed - 50;
       drivingStatus = 'speeding';
    }else if (speed - 50 <= 40 && speed - 50 > 20){
        overSpeed = speed - 50;
        drivingStatus = 'excessive speeding';
    }else {
        drivingStatus = 'reckless driving'
        overSpeed = speed - 50;
    }
}else if ( area === `motorway`){
    if (speed - 130 <= 20){
        drivingStatus = 'speeding';
        overSpeed = speed - 130;
     }else if (speed - 130 <= 40 && speed - 130 > 20){
         drivingStatus = 'excessive speeding';
         overSpeed = speed - 130
     }else {
         overSpeed = speed - 130;
         drivingStatus = 'reckless driving'
     }
}else if ( area === `interstate`){
    if (speed - 90 <= 20){
        drivingStatus = 'speeding';
        overSpeed = speed - 90;
     }else if (speed - 90 <= 40 && speed - 90 > 20){
         drivingStatus = 'excessive speeding';
         overSpeed = speed - 90
     }else {
         overSpeed = speed - 90;
         drivingStatus = 'reckless driving'
     }
}else if ( area === `residential`){
    if (speed - 20 <= 20){
        drivingStatus = 'speeding';
        overSpeed = speed - 20;
     }else if (speed - 20 <= 40 && speed - 20 > 20){
         drivingStatus = 'excessive speeding';
         overSpeed = speed - 20
     }else {
         overSpeed = speed - 20;
         drivingStatus = 'reckless driving'
     }
}

return [overSpeed, drivingStatus]
}
if (area === 'city'){
    if (speed <= 50){
        console.log(`Driving ${speed} km/h in a ${50} zone`);   
    }else {
        let [overSpeed, drivingStatus] = status(speed, area)
        console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of ${50} - ${drivingStatus}`);
        
    }
}else if (area === `motorway`){
    if (speed <= 130){
        console.log(`Driving ${speed} km/h in a ${130} zone`);
    }else {
        let [overSpeed, drivingStatus] = status(speed, area)
        console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of ${130} - ${drivingStatus}`);
    }
}else if (area === `interstate`){
    if (speed <= 90){
        console.log(`Driving ${speed} km/h in a ${90} zone`);
    }else {
        let [overSpeed, drivingStatus] = status(speed, area)
        console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of ${90} - ${drivingStatus}`);
    }
}else if (area === `residential`){
    if (speed <= 20){
        console.log(`Driving ${speed} km/h in a ${20} zone`);
    }else {
        let [overSpeed, drivingStatus] = status(speed, area)
        console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of ${20} - ${drivingStatus}`);
    }
}


}

roadRadar(60, 'city')