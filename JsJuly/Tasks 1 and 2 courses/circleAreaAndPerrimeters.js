function circleArea(input){

    let r = Number(input[0]);
    let MathPi = Math.PI;

    let area = r * r *(MathPi);
    let perimeter = 2 * (MathPi) * r;

    console.log(area.toFixed(2));
    console.log(perimeter.toFixed(2));

}
circleArea(["3"])