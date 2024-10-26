function solve(number, operator, secondNumber){

let sum = 0
switch(operator){
    case `+`: sum = number + secondNumber; break;
    case `-`: sum = number - secondNumber; break;
    case `/`: sum = number / secondNumber;break;
    case `*`: sum = number*secondNumber;break;
}



console.log(sum.toFixed(2));




}

solve(25.5,
    '-',
    3
    
    )