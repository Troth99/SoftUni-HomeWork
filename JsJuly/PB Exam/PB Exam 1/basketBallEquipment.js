function basketBallEquipment(input){

    let taxPerYear= Number(input[0]);

    let sneakers = taxPerYear - taxPerYear * 0.40;
    let equipment = sneakers - sneakers * 0.20;
    let basketBall = equipment / 4;
    let accessories = basketBall / 5;

    let totalSum = taxPerYear + sneakers + equipment + basketBall + accessories;


    console.log(totalSum.toFixed(2))
}

basketBallEquipment(["320"])