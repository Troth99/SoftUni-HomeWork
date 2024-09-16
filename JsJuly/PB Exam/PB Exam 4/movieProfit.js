function movieProfit(input){

    let movieName = input[0];
    let days = Number(input[1]);
    let tickets = Number(input[2]);
    let ticketPrice = Number(input[3]);
    let studioPercent = Number(input[4])


    let ticketPricePerDay = tickets * ticketPrice;
    let totalPeriodProfit = days * ticketPricePerDay;

    let studioProfitPercent = (totalPeriodProfit * studioPercent) / 100;

    let total = totalPeriodProfit - studioProfitPercent;

    console.log(`The profit from the movie ${movieName} is ${total.toFixed(2)} lv.`);
    



}

movieProfit(["The Jungle",
    "22",
    "20500",
    "9.37",
    "30"])
    
    
    