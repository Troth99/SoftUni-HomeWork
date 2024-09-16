function series(input){

    let index = 0;
    let buget = Number(input[index]);
    index++
    let seriesNumber = Number(input[index]);
    index++

    let expenses = 0;

    for (let i = 0; i < seriesNumber; i++){

        let seriesName = input[index];
        index++
        let seriesPrice = Number(input[index]);
        index++

            switch (seriesName){
                case `Thrones`:
                    seriesPrice -= seriesPrice * 0.50;
                    break;
                case `Lucifer`:
                    seriesPrice -= seriesPrice * 0.40;
                    break;
                case `Protector`:
                    seriesPrice -=seriesPrice * 0.30
                    break;
                case `TotalDrama`:
                    seriesPrice-= seriesPrice * 0.20;
                    break;
                case 'Area':
                    seriesPrice -= seriesPrice * 0.10
                    break;
            }

        expenses += seriesPrice
    }

    if (buget >= expenses){
        let moneyLeft = Math.abs(buget - expenses)
        console.log(`You bought all the series and left with ${moneyLeft.toFixed(2)} lv.`);
        }else {
            let moneyNeeded = expenses - buget
            console.log(`You need ${moneyNeeded.toFixed(2)} lv. more to buy the series!`);
            
        }

}

series(["25",
    "6",
    "Teen Wolf",
    "8",
    "Protector",
    "5",
    "TotalDrama",
    "5",
    "Area",
    "4",
    "Thrones",
    "5",
    "Lucifer",
    "9"])
    
    