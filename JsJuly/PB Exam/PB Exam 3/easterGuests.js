function easterGuests(input){

    let guestNumber = Number(input[0]);
    let budged= Number(input[1]);
    let totalSum = 0;

    let easterBreadCount = Math.ceil( guestNumber / 3);
    let eggsCount = guestNumber * 2;
    let easterBread = easterBreadCount * 4;
    let perEgg = eggsCount*0.45;

    let totalPrice = easterBread + perEgg;
    

    if (budged >= totalPrice){
        console.log(`Lyubo bought ${(easterBreadCount)} Easter bread and ${eggsCount} eggs.`);
        console.log(`He has ${(budged - totalPrice).toFixed(2)} lv. left.`);
    }
      else  {
        console.log (`Lyubo doesn't have enough money.`);
        console.log(`He needs ${(totalPrice - budged).toFixed(2)} lv. more.`);
    }
    

}
easterGuests(["10" , "35"])
//easterGuests(["9" , "12"])