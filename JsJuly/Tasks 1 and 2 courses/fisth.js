function fishMarket(input){

    let skumriya = Number(input[0]);
    let caca = Number(input[1]);
    let kiloPalmud = Number(input[2]);
    let kiloSafrid = Number(input[3]);
    let midi = Number(input[4]);

    palmud = 0.60;
    safrid = 0.80;
    midiPriceForKilo = 7.50;

    let palmudPrice = skumriya + skumriya * palmud;
    let totalPalmudPrice = kiloPalmud * palmudPrice;
    let safridPrice = caca+caca * safrid;
    let totalPriceSafrid = kiloSafrid * safridPrice;
    let midiPrice = midi * midiPriceForKilo;

    let totalSum = totalPalmudPrice + totalPriceSafrid + midiPrice;

    console.log(totalSum.toFixed(2));






}

fishMarket(["6.90", "4.20" , "1.5" , "2.5" , "1"])
fishMarket(["5.55", "3.57 " , "4.3" , "3.6" , "7"])