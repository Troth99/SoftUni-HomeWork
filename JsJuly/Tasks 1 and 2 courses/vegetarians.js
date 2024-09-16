function vegetableMarket(input){

    let vegetables = Number(input[0]);
    let fruits = Number(input[1]);
    let totalKilosVegetables = Number(input[2]);
    let totalKilosFruits = Number(input[3]);

    euro = 1.94;


    let sumVegetables = vegetables * totalKilosVegetables;
    let sumFruits = fruits * totalKilosFruits;
    let totalsum = (sumVegetables + sumFruits) / euro;

    console.log(totalsum.toFixed(2));

}

vegetableMarket(["0.194","19.4", "10" , "10" ])
vegetableMarket(["1.5","2.5", "10" , "10"])