function oscars (input){

    let rent = Number(input[0]);

    let statuePrice = rent - rent* 0.30;
    let ketaring = statuePrice - statuePrice * 0.15;

    let soundPrice = ketaring / 2;

    let totalSum = rent + ketaring + soundPrice + statuePrice;


    
    
    console.log(totalSum.toFixed(2))



}
oscars (["3500"])