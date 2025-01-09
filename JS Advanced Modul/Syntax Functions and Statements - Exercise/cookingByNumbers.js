function solve(number, action1, action2, action3, action4, action5){

let parsedNum = Number(number);

let actions = [action1, action2, action3, action4, action5];

for (let action of actions){
   
 if (action === `chop`){
    parsedNum /= 2;
    console.log(parsedNum);
    
 }else if (action === `dice`){
    parsedNum = Math.sqrt(parsedNum);
    console.log(parsedNum);
 }else if (action === `spice`){
    parsedNum += 1;
    console.log(parsedNum);
 }else if (action === `bake`){
    parsedNum *= 3;
    console.log(parsedNum);
 }else if (action === `fillet`){

    let twentyPercent = parsedNum * 0.20
    parsedNum -= twentyPercent
    console.log(parsedNum);

 }
}



}

solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')