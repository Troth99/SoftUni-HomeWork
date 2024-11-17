function winningTicket(input) {
    let tickets = input.split(/\s*,\s*/);
    let winningPattern = /(?<symbol>[@#$^]{6,})/;

    for (let ticket of tickets) {
        let trimmedTicket = ticket.trim(); 

    
        if (trimmedTicket.length !== 20) {
            console.log(`invalid ticket`);
            continue;
        }

        let leftHalf = trimmedTicket.slice(0, 10); 
        let rightHalf = trimmedTicket.slice(10);  

        let leftMatch = leftHalf.match(winningPattern);  
        let rightMatch = rightHalf.match(winningPattern);

     
        if (leftMatch && rightMatch) {
            let leftSymbol = leftMatch.groups.symbol;  
            let rightSymbol = rightMatch.groups.symbol;  

           
            if (leftSymbol === rightSymbol) {
                let matchLength = Math.min(leftMatch[0].length, rightMatch[0].length); 

            
                if (matchLength === 10) {
                    console.log(`ticket "${trimmedTicket}" - ${matchLength}${leftSymbol[0]} Jackpot!`);
                } else {
                    console.log(`ticket "${trimmedTicket}" - ${matchLength}${leftSymbol[0]}`);
                }
                continue;
            }
        }

     
        console.log(`ticket "${trimmedTicket}" - no match`);
    }
}


winningTicket(`validticketnomatch:(`)
