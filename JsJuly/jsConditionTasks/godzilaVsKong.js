function godzilaVsKong(data){

    let budged = Number(data[0]);
    let statisNumber = Number(data[1]);
    let pricePerStatis = Number(data[2]);

    let decor = budged* 0.10;
    let outfitTotal = statisNumber * pricePerStatis;

    

    if (statisNumber > 150){
       outfitTotal = outfitTotal - outfitTotal* 0.10;
    }

    let totalMoivePrice = decor + outfitTotal;
    let total = Math.abs(totalMoivePrice - budged);

    
    if (totalMoivePrice  > budged){
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${total.toFixed(2)} leva more.`)
    }
     else {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${total.toFixed(2)} leva left.`)
    }





}

godzilaVsKong(["15437.62", "186", "57.99"])