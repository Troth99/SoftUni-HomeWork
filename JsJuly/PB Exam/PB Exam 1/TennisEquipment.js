function tennisEquipment(input){

    let tenisRocketPrice = Number(input[0]);
    let tenisRocketNumber = Number(input[1]);
    let sneakers = Number(input[2]);

    let rocketPrice = tenisRocketPrice * tenisRocketNumber;
    let sneakersPerPair = tenisRocketPrice / 6;
    let totalSneakersPair = sneakers * sneakersPerPair;

    let leftMoney = (rocketPrice + totalSneakersPair) * 0.2;
    let totalMoney = rocketPrice + totalSneakersPair + leftMoney;

    let djokovicSum = Math.floor( totalMoney / 8);
    let sponsors = Math.ceil (totalMoney * 7/8);

    console.log(`Price to be paid by Djokovic ${djokovicSum}`);
    console.log(`Price to be paid by sponsors ${sponsors}`)
    
}

tennisEquipment(["850" , "4" ,"2"])