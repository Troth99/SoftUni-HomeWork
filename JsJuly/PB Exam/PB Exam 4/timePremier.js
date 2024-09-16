function timePremiere(input){

    let movieName = input[0];
    let package = input[1];
    let numberOfTickets = Number(input[2]);

    let price = 0

    switch(movieName){
        case 'John Wick':
            switch (package){
                case 'Drink':
                    price = numberOfTickets * 12;
                break;
                case 'Popcorn':
                    price = numberOfTickets *15;
                    break;
                case 'Menu':
                    price = numberOfTickets *19;
                    break;
            }break;
        case 'Star Wars':
            switch(package){
                case 'Drink':
                    price = numberOfTickets *18;
                break;
                case 'Popcorn':
                    price = numberOfTickets * 25;
                break;
                case 'Menu':
                    price = numberOfTickets *30
                break;
            }break;
        case 'Jumanji':
            switch(package){
                case 'Drink':
                    price = numberOfTickets *9;
                break;
                case 'Popcorn':
                    price = numberOfTickets *11;
                break;
                case 'Menu':
                    price = numberOfTickets *14;
                break;
            }
    }

    if (movieName === 'Star Wars' && numberOfTickets >= 4){
        price -= price * 0.30
    }else if (movieName === 'Jumanji' && numberOfTickets === 2) {
        price -= price * 0.15
    }
console.log(`Your bill is ${price.toFixed(2)} leva.`);

}
timePremiere(["Jumanji",
    "Menu",
    "2"])
    
    