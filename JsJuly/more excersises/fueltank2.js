function litterFuel(input){

    let fuelType = input[0];
    let fuelLitter = Number(input[1]);
    let discount = input[2];
    let fuelPrice = 0;




     if (fuelType === `Gas`){
        fuelPrice = fuelPrice + 0.93 * fuelLitter;
        if (discount === `Yes`)
        {
            fuelPrice -= 0.08 * fuelLitter
        }
    }
    else if (fuelType === `Gasoline`)
    {
        fuelPrice = fuelPrice + 2.22 * fuelLitter
        if (discount === `Yes`)
        {
            fuelPrice -=0.18* fuelLitter
        }
    }
    else if (fuelType === `Diesel`){
        fuelPrice = fuelPrice + 2.33 * fuelLitter
        if (discount === `Yes`){
            fuelPrice -= 0.12 * fuelLitter
        }
    }
    if (20 <=fuelLitter && fuelLitter <= 25){
        fuelPrice = fuelPrice - fuelPrice * 0.08;
    }else if (fuelLitter > 25){
        fuelPrice = fuelPrice - fuelPrice * 0.1;
    }
console.log(`${fuelPrice.toFixed(2)} lv.`)


}

litterFuel (["Gas" , "30" , "Yes"])
litterFuel (["Gasoline" , "25" , "No"])
litterFuel(["Diesel" , "19" , "No"])