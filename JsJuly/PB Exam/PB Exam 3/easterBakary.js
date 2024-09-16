function easterBakary(input){

    let brashno = Number(input[0]);
    let brashnoKil = Number(input[1]);
    let sugaKilo = Number(input[2]);
    let eggsPlant = Number(input[3]);
    let mayaPackage = Number(input[4]);

    let sugarPricePerKilo = brashno * 0.75;
    let eggsSum = brashno * 1.1;
    let mayaSum = sugarPricePerKilo * 0.2;
    let sumBrashno = brashno * brashnoKil;
    let sugarSum = sugarPricePerKilo * sugaKilo;
    let eggsSumTotal = eggsSum * eggsPlant;
    let mayaSumTotal = mayaSum * mayaPackage;

    let totalSum = sumBrashno+sugarSum + eggsSumTotal + mayaSumTotal;


    console.log(totalSum.toFixed(2));

}
easterBakary(["50" , "10" , " 3.5", "6" , "1"])