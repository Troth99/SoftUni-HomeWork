function calculator(n1, n2, operator){
let res = 0
switch(operator){
    case`multiply`: res = n1 * n2; break;
    case `divide`: res = n1 / n2; break;
    case `add`: res = n1 + n2; break;
    case `subtract`: res = n1 - n2;break;
}


console.log(res);

}


calculator(5,
    5,
    'multiply'
    )