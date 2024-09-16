function agencyProfit(input){

    let agencyName = input[0];
    let adultTicket = Number(input[1]);
    let kidsTicket = Number(input[2]);
    let netPriceAdult = Number(input[3]);
    let tax = Number(input[4])

    let NetPriceKid = netPriceAdult - netPriceAdult * 0.70

    let taxSumAdult = netPriceAdult + tax
    let taxSumKid = NetPriceKid + tax

    let totalPriceTickets = (adultTicket * taxSumAdult) + (kidsTicket * taxSumKid)

    let agencyProfit = totalPriceTickets - totalPriceTickets * 0.80;

    console.log(`The profit of your agency from ${agencyName} tickets is ${agencyProfit.toFixed(2)} lv.`);
    

}

agencyProfit(["Ryanair",
    "60",
    "23",
    "158.96",
    "39.12"])
    
    