function movieTicket(input) {
    let a1 = Number(input[0]);
    let a2 = Number(input[1]);
    let n = Number(input[2]);

    for (let charCode = a1; charCode < a2; charCode++) {
        let symbol1 = String.fromCharCode(charCode);
        let symbol4 = charCode; 
        
        if (symbol4 % 2 !== 0) {  
            for (let symbol2 = 1; symbol2 < n; symbol2++) {
                for (let symbol3 = 1; symbol3 <= Math.floor(n / 2) - 1; symbol3++) {
                    let sum = symbol2 + symbol3 + symbol4;
                    
                    if (sum % 2 !== 0) {  
                        let ticket = `${symbol1}-${symbol2}${symbol3}${symbol4}`;
                        console.log(ticket);
                    }
                }
            }
        }
    }
}


        








movieTicket(["71",
    "74",
    "6"])
    
    