function triangleArea(input){
    let side = Number(input[0]); //страна на триъгълник
    let height = Number(input[1]); //височина на триъгълник

    let a = side;
    let h = height;

    let area= a*h/2;

    console.log(area.toFixed(2))
}

triangleArea(["20", "30"])
triangleArea(["15", "35"])
triangleArea(["7.75","8.45"])
triangleArea(["1.23456" , "4.56789"])