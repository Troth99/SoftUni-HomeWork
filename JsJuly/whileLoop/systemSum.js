function systemSum (input){
    let index = 0;
    let sumNeeded = Number(input[index]);
    index++;
 
    let command = input[index];
    index++;
 
    let counter = 0;
    let cash = 0;
    let card = 0;
    let transactionCash = 0;
    let transactionCard = 0;
 
 
 
    while(index <= input.length){
        let money = Number(command);
 
        if(command === 'End'){
            console.log(`Failed to collect required money for charity.`);
            break;
        }
 
 
        counter+=1
        if(counter % 2 !== 0){
            if(money <= 100){
                cash+=money
                transactionCash++
                console.log(`Product sold!`)
            }else{
                console.log(`Error in transaction!`)
 
            }
 
        }else{
            if(money <= 10){
                console.log(`Error in transaction!`)
            }else{
                card+=money
                transactionCard++
                console.log(`Product sold!`)
 
            }
 
        }if (cash + card >= sumNeeded) {
            break
          }
 
 
        command = input[index];
        index++;
 
    }
 
   let total = cash + card;
   if(total >= sumNeeded){
    console.log(`Average CS: ${(cash / transactionCash).toFixed(2)}`)
    console.log(`Average CC: ${(card / transactionCard).toFixed(2)}`)
   }

}


systemSum([`600`, `86`, `150`, `98`, `227`, `End`])