function fromCtoF(userData){

    let celsius = Number(userData[0]);

    F =32;
    let result = fahrenheit = (celsius * 9/5) + F;


    console.log(result.toFixed(2))

}

fromCtoF(["25"])
fromCtoF(["0"])
fromCtoF(["-5.5"])
fromCtoF(["32.3"])