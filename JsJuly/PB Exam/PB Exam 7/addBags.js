function addBags(input) {

    let priceBagsAbove20 = Number(input[0]);
    let bagsKillograms = Number(input[1]);
    let days = Number(input[2]);
    let numberOfBags = Number(input[3])

    let bagPrice = 0

    if (bagsKillograms < 10) {
        bagPrice = priceBagsAbove20 - priceBagsAbove20 * 0.80
    } else if (bagsKillograms >= 10 && bagsKillograms <= 20) {
        bagPrice = priceBagsAbove20 - priceBagsAbove20 * 0.50
    } else {
        bagPrice = priceBagsAbove20
    }

    if (days > 30) {
        bagPrice += bagPrice* 0.10
    } else if (days >= 7 && days <= 30) {
        bagPrice += bagPrice * 0.15
    } else {
       bagPrice += bagPrice * 0.40
    }

    
   
    let total = bagPrice * numberOfBags
    console.log(`The total price of bags is: ${total.toFixed(2)} lv.`);





}

addBags(["25.50",
    "5",
    "36",
    "6"])

    addBags(["30",
        "18",
        "15",
        "2"])
        addBags(["63.80",
            "23",
            "3",
            "1"])
            


