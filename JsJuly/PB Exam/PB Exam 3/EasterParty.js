function easterParty(input){

    let guestCount = Number(input[0]);
    let pricePerPerson = Number(input[1]);
    let budgedDessey = Number(input[2]);

    let cake = budgedDessey * 0.10;

        if (guestCount >= 10 && guestCount <= 15){
            pricePerPerson = pricePerPerson * 0.85;
        } else if (guestCount >= 15 && guestCount <= 20){
            pricePerPerson = pricePerPerson * 0.80;
        } else if (guestCount > 20){
            pricePerPerson = pricePerPerson * 0.75;
        }

        let totalGuestPrice = guestCount * pricePerPerson;
        let totalSum = totalGuestPrice + cake;

        if (totalSum <= budgedDessey){
            console.log(`It is party time! ${((budgedDessey - totalSum).toFixed(2))} leva left.`);
        } else 
            console.log(`No party! ${((totalSum - budgedDessey).toFixed(2))} leva needed.`);



    
}
easterParty(["18" , "30" , "450"])
easterParty(["8" , "25 ", " 340"])