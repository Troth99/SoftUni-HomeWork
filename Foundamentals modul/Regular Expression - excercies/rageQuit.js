function rageQuit(input) {
  
    let pattern = /([^\d]+)(\d+)/g;
    let match;
    let rageMessage = ""; 
    let uniqueSymbols = new Set(); 

   
    while ((match = pattern.exec(input)) !== null) {
        let text = match[1].toUpperCase(); 
        let repeatCount = Number(match[2]); 
        
 
        rageMessage += text.repeat(repeatCount);
    }


    for (let char of rageMessage) {
        uniqueSymbols.add(char.toLowerCase());
    }


    console.log(`Unique symbols used: ${uniqueSymbols.size}`);
    console.log(rageMessage);
}
rageQuit(`aSd2&5s@1`)