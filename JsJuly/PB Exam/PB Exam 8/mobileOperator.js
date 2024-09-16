function mobileOperator(input){

    let duration = input[0];
    let typeOfInvoice = input[1]
    let mobileNet = input[2];
    let monthsOfPayment = Number(input[3]);


    let dogovorSum = 0

    switch(duration){
        case `one`:
            switch(typeOfInvoice){
                case `Small`:
                dogovorSum += 9.98
                break;
                case `Middle`:
                    dogovorSum += 18.99;
                break;
                case `Large`:
                    dogovorSum += 25.98
                break;
                case `ExtraLarge`:
                    dogovorSum += 35.99
                break;
            }break;
        case `two`:
            switch(typeOfInvoice){
                case `Small`:
                dogovorSum += 8.58
                break;
                case `Middle`:
                    dogovorSum += 17.09
                break;
                case `Large`:
                    dogovorSum += 23.59
                break;
                case `ExtraLarge`:
                    dogovorSum += 31.79
                break;
    }break;


}

    if (mobileNet === `yes`){
        if (dogovorSum <= 10.00){
            dogovorSum += 5.50
        }else if (dogovorSum >= 10.00 && dogovorSum <= 30.00){
            dogovorSum += 4.35
        }else if ( dogovorSum > 30){
            dogovorSum += 3.85
        }
    
}

if (duration === `two`){
    dogovorSum -= (dogovorSum * 3.75) /100
}
let totalSum = dogovorSum * monthsOfPayment
console.log(`${totalSum.toFixed(2)} lv.`);


}
mobileOperator(["one",
    "Small",
    "yes",
    "10"])
    
    
    