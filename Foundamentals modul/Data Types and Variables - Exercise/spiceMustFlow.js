function spiceExtraction(startingYield) {
    let totalSpice = 0; 
    let days = 0;       
    
  
    while (startingYield >= 100) {
        days++; 
        totalSpice += startingYield; 
        startingYield -= 10; 
        totalSpice -= 26;  

        if (totalSpice < 0) {
            totalSpice = 0;
        }
    }
    

    if (totalSpice >= 26) {
        totalSpice -= 26;
    }
    
    console.log(days);  
    console.log(totalSpice);  
}


spiceExtraction(450);


