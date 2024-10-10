function solve(order, quality){
let sum = 0
switch(order){
    case `coffee`: sum = 1.50 * quality ;break;
    case `coke`: sum = 1.40 * quality; break;
    case `water`: sum = 1.00 * quality; break;
    case `snacks`: sum = 2.00 * quality; break;
}

console.log(sum.toFixed(2));



}

solve("coffee", 2)