function happyNumbers(input){

    let num = Number(input[0])
    let string = ``

 for (let a = 1; a <= 9; a++){
    for (let b = 1; b<= 9; b++){
        for (let c = 1; c<=9; c++){
            for (let d =1 ; d <= 9; d++){
            if ((d <= 9) && ((a + b) === (c + d)) && (d > 0) && (a + b === num)){
                if (((a+b) === (c +d)) && (num % (a + b) === 0)){
                    string += `${a}${b}${c}${d}` + ` `;
                } 
            } 
        } 
     }
    }
}
console.log(string);
}



happyNumbers([`24`])