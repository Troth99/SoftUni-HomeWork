function carNumber(input){

    let num1 = Number(input[0])
    let num2 = Number(input[1])

    let string = ``

    for (let i = num1; i<= num2; i++){
        for (let j = num1; j <= num2; j++){
            for (let k = num1; k <= num2; k++){
                for (let y = num1; y <= num2; y++){

                    if (i > y && (j +k) % 2 ===0){
                        if (i % 2 === 0 && y % 2 !== 0){
                            string += `${i}${j}${k}${y} `
                        }
                        else if (i % 2 !== 0 && y % 2 ===0){
                            string += `${i}${j}${k}${y} `
                        }
                    }
                }
            }
        }
    }


    console.log(string);
    
}


carNumber([`2`,`3`])