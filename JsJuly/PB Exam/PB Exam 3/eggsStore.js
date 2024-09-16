function eggStore(input) {
    let index = 0;
    let eggsInStore = Number(input[index]);
    index++;

    let eggsSold = 0;

    while (index < input.length) {
        let buyOrFill = input[index];
        index++;

        if (buyOrFill === "Close") {
            console.log(`Store is closed!`);
            console.log(`${eggsSold} eggs sold.`);
            break;
        }

        let numberOfEggs = Number(input[index]);
        index++;

        if (buyOrFill === "Buy") {
            if (numberOfEggs > eggsInStore) {
                console.log(`Not enough eggs in store!`);
                console.log(`You can buy only ${eggsInStore}.`);
                break;
            } else {
                eggsInStore -= numberOfEggs;
                eggsSold += numberOfEggs;
            }
        } else if (buyOrFill === "Fill") {
            eggsInStore += numberOfEggs;
        }
    }
}



eggStore(["13",
    "Buy",
    "8",
    "Fill",
    "3",
    "Buy",
    "10"])
    