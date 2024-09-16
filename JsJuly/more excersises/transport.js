function transport(input){

    let kilometers = Number(input[0]);
    let dayOrNight = input[1];

    let price = 0.00;

  
    busDayNight = 0.09; //. Може да се използва за разстояния минимум 20 км.

    train = 0.06; //Може да се използва за разстояния минимум 100 км.

    if (dayOrNight === "day"){
        taxiRate = 0.79
    }else {
        taxiRate = 0.90
    }
    if (kilometers < 20) {
        price = 0.70 + taxiRate * kilometers;
        
    }else if (kilometers <100){
        price = kilometers* 0.09;
    }
    else {
        price = kilometers *0.06

    }
    console.log(price.toFixed(2))



}
transport(["5" , "day"])
transport(["180" , "night"])