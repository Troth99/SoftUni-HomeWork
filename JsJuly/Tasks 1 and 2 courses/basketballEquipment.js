function basketballEquipment(input){

    let tax = Number(input[0]);

    let sneakers = tax - tax * 0.40;
    let outfit = sneakers - sneakers * 0.20;
    let ballPrice = outfit / 4;
    let accessories = ballPrice / 5;

    let expenses = tax + sneakers + outfit + accessories + ballPrice;

    console.log(expenses);
}   

basketballEquipment(["550"])