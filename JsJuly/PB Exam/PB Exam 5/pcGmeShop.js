function pcGameShop(input) {

    let numberOfSoldGames = Number(input[0]);


    let hearstone = 0;
    let fornite = 0;
    let Overwatch = 0
    let others = 0;

    for (let i = 1; i < input.length; i++) {

        let currentGameName = input[i]
       

        switch (currentGameName) {
            case 'Hearthstone':
                hearstone++
                break;
            case 'Fornite':
                fornite++
                break;
            case 'Overwatch':
                Overwatch++
                break;
            default:
                others++
                break;
        }

    }

    let percentageHS = hearstone * 100 / numberOfSoldGames
    let percentageFornite = fornite * 100 / numberOfSoldGames
    let percentageOW = Overwatch * 100 / numberOfSoldGames
    let percentageOthers = others * 100 / numberOfSoldGames

    console.log(`Hearthstone - ${percentageHS.toFixed(2)}%`);
    console.log(`Fornite - ${percentageFornite.toFixed(2)}%`);
    console.log(`Overwatch - ${percentageOW.toFixed(2)}%`);
    console.log(`Others - ${percentageOthers.toFixed(2)}%`);
    
    
    
    

}


pcGameShop(["3",
    "Hearthstone",
    "Diablo 2",
    "Star Craft 2"])
    
