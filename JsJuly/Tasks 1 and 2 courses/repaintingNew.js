function repainting(input){
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let workHours = Number(input[3]);

    let nylonPrice = 1.50;
    let paintPrice = 14.50;
    let thinnerPrice = 5.00;
    let bagPrice = 0.40;

    paint = paint + paint * 0.10;
    nylon = nylon + 2;

    let totalNylonPrice = nylon * nylonPrice;
    let totalPaintPrice = paint * paintPrice;
    let totalThinnerPrice = thinner * thinnerPrice;

    let currentSum = totalNylonPrice + totalPaintPrice + totalThinnerPrice + bagPrice;
    let workerPricePerHour = currentSum * 0.30;
    let totalWorkersExpenses = workerPricePerHour * workHours;

    let expenses = currentSum + totalWorkersExpenses;


    console.log(expenses);



}

repainting(["10","11" , "4" , "8"])