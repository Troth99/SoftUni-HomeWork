function balance(input){

    let total = 0;
    let index = 0;
    let currentRow = input[index];

    while(currentRow !== `NoMoreMoney`){

        let rowAsNum = Number(currentRow);

        if (rowAsNum < 0){
            console.log(`Invalid operation!`);
            break;
            
        }
        total += rowAsNum
        console.log(`Increase: ${rowAsNum.toFixed(2)}`);
        
        index++
        currentRow = input[index]

    }
    console.log(`Total: ${total.toFixed(2)}`);
    


}

balance(["5.51", 
    "69.42",
    "100",
    "NoMoreMoney"])
    