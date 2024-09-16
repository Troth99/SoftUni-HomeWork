function godzilaVsKong(inputData){

    let budgedMovie = Number(inputData[0]);
    let statist = Number(inputData[1]);
    let cloth = Number(inputData[2]);

    let decord = budgedMovie * 0.10;
    
    let outfit = cloth * statist;
    
    if (statist > 150){

        outfit = outfit - outfit * 0.10;
    };

    let totalSum = decord + outfit;

   let total = Math.abs (totalSum - budgedMovie);

    if (totalSum > budgedMovie)
    {
        console.log(`Not enough money!`);
        console.log (`Wingard needs ${(total.toFixed(2))} leva more.`);
    }

    else 
     {
         console.log(`Action!`);
        console.log(`Wingard starts filming with ${(total.toFixed(2))} leva left.`);
    }


}

godzilaVsKong(["20000" , "120" , "55.5"])
//godzilaVsKong(["9587.88" , "222" , "55.68"])
