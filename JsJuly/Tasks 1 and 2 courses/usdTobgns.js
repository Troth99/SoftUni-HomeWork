function usdToBgn(input){

    let usd = Number(input[0]);
    let exchangeRate = 1.79549;
    let bgn = usd * exchangeRate;
    
    console.log(bgn);



}

usdToBgn(["22"])
usdToBgn(["100"])