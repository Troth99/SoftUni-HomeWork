function fruitShop(input){

    let strawberry = Number(input[0]);
    let bananasKilos = Number(input[1])
    let portocalsKilos = Number(input[2]);
    let malini = Number(input[3]);
    let straberrysKilograms = Number(input[4]);

    let maliniPrice = strawberry - strawberry * 0.50;
    let portocalsPrice =  maliniPrice - maliniPrice* 0.4
    let bananaPrice = maliniPrice - maliniPrice * 0.80

    let maliniSum = malini * maliniPrice
    let protocalSum = portocalsKilos * portocalsPrice
    let bananaSum = bananaPrice * bananasKilos
    let strawBerrySum = straberrysKilograms * strawberry

    let TotalSum = maliniSum + protocalSum + bananaSum + strawBerrySum

    console.log(TotalSum.toFixed(2));
    


}


fruitShop([`48`,`10`,`3.3`,`6.5`,`1.7`])