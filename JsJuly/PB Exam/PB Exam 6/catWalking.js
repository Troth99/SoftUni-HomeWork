function catWalking(input){

    let minutesPerDay = Number(input[0]);
    let numberOfWalkingsPerDay = Number(input[1])
    let kaloriesPerDay = Number(input[2]);

    let totalMinutesWalking = minutesPerDay * numberOfWalkingsPerDay
    let totalKaloriesPerDay = totalMinutesWalking * 5

    let percentageKalories = kaloriesPerDay - kaloriesPerDay * 0.50

    if (percentageKalories <= totalKaloriesPerDay){
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${totalKaloriesPerDay}.`);
    }else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${totalKaloriesPerDay}.`);
        
    }




}

catWalking(["15",
    "2",
    "500"])
    