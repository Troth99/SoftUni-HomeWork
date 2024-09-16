function timeInthePast(input) {

    let index = 0;
    let money = Number(input[index]);
    index++;
    let yearOfLiving = Number(input[index]);
    index++


    let age = 17;

    for (let i = 1800; i <= yearOfLiving; i++) {

        
        if (i % 2 === 0) {
            age += 1
            money -= 12000
        } else {
            age += 1
            money -= 12000 + age * 50
        } 

    }

    if (money >= 0) {
        console.log(`Yes! He will live a carefree life and will have ${money.toFixed(2)} dollars left.`);
    } else {
        console.log(`He will need ${Math.abs(money).toFixed(2)} dollars to survive.`);
    }


}

timeInthePast(["50000", "1802"])