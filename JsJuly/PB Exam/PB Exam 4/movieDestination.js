function movieDestination(input){

    let budget = Number(input[0]);
    let destination = input[1];
    let season = input[2];
    let days = Number(input[3]);

    let money = 0;

    switch (season){
        case `Winter`:
            switch (destination){
                case `Dubai`:
                    money = days * 45000;
                   
            break;
                case `Sofia`:
                   money = days * 17000;
                   
                    break;
                case `London`:
                    money =days * 24000;
                   
                    break;
                }break;
            }switch (season) {
                case `Summer`:
               switch(destination){
                case `Dubai`:
                    money =days * 40000
                   
               break;
               case `Sofia`:
                money = days * 12500;
                
                break;
                case `London`:
                  money =  days * 20250;
                    break;
            }break;
            }

        if (destination === `Dubai`){
            money -= money * 0.30
        }else if (destination === `Sofia`){
            money += money * 0.25
        }

        if(budget > money){
            let moneyLeft = Math.abs(budget - money)
            console.log(`The budget for the movie is enough! We have ${moneyLeft.toFixed(2)} leva left!`);     
        }else {
            let moneyneeded = Math.abs(money-budget)
            console.log(`The director needs ${(moneyneeded.toFixed(2))} leva more!`);
            
        }
        
            
}

movieDestination(["1000000",
    "Dubai",
    "Summer",
    "5"])
    


    