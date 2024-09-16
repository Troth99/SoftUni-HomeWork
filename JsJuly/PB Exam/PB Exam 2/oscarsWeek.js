function oscarsWeek(input){
    let movieName = input[0];
    let roomType = input[1];
    let ticketsBought = Number(input[2]);

   let price=0;


   switch(movieName) {
        case "A Star Is Born":
        switch(roomType){
            case"normal":
            price = 7.50;
            break;
            case "luxury":
                price = 10.50;
            break;
            case "ultra luxury":
                price = 13.50;
            break;
        

        }
    }
    switch(movieName){
        case "Bohemian Rhapsody":
            switch(roomType){
                case"normal":
                price = 7.35;
                break;
                case "luxury":
                    price = 9.45;
                    break;
                    case"ultra luxury":
                    price =12.75;
                    break;
            }
    }
    switch(movieName){
        case "Green Book":
        switch(roomType){
            case "normal":
                price = 8.15;
                break;
                case "luxury":
                    price = 10.25;
                    break;
                    case"ultra luxury":
                    price = 13.25;
                    break;

        }
    }
    switch(movieName){
        case "The Favourite":
            switch(roomType){
                case"normal":
                price = 8.75;
                break;
                case "luxury":
                    price = 11.55;
                    break;
                    case "ultra luxury":
                        price = 13.95;
                        break;
            }
    }
    let totalSum = ticketsBought * price;
    console.log(`${movieName} -> ${(totalSum.toFixed(2))} lv.`)

    }
oscarsWeek(["A Star Is Born" , "luxury" , "42"])
oscarsWeek(["Green Book", "normal" , "63"])