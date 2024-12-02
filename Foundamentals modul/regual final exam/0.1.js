function solve(arr){
    function reverseFunction(initialCode){
        let reversedMsg = initialCode.split(``).reverse().join(``);
        return reversedMsg
    }
    function swappingCase(initialCode){
        let newMsg = ``
        for (let i = 0; i < initialCode.length; i++){
            let symbol = initialCode[i]
            if (symbol === symbol.toUpperCase()){
                symbol = symbol.toLowerCase()
                newMsg += symbol
            }else if (symbol === symbol.toLowerCase()){
                symbol = symbol.toUpperCase();
                newMsg += symbol;
            }
        }
        return newMsg
    }
    function replacingAllOccurences(oldChar, newChar){
        let replacingAll= initialCode.split(oldChar).join(newChar);
        return replacingAll
    }
    function replacingAtIndex(index, char){
        let replacedAtIndex = initialCode.split(``)
        replacedAtIndex.splice(index, 1, char).join(``)
        return replacedAtIndex.join(``)
    }
    function deletingSubstring(substring){
        let newMsg = ``
       for (let i = 0; i < initialCode.length; i++){
        let char = initialCode[i]
        if (char === substring){
            continue
        }else {
            newMsg += char
        }
       }
        return newMsg
    }
let initialCode = arr.shift()
let command = arr.shift()


while (command !== `Finalize`){

    let tokens = command.split(` `)
    let action = tokens.shift().toLowerCase()

    if (action === `encrypt`){
        initialCode = reverseFunction(initialCode);
        console.log(initialCode);
        
    }else if (action === `decrypt`){
        initialCode = swappingCase(initialCode);
        console.log(initialCode);
        
    }else if (action === `substitute`){
        let oldChar = tokens[0];
        let newChar = tokens[1];
        if (initialCode.includes(oldChar)){
            initialCode = replacingAllOccurences(oldChar, newChar);
            console.log(initialCode);
        }else {
            console.log(`Character not found.`); 
        }
    }else if (action === `scramble`){
        let index = Number(tokens[0]);
        let char = tokens[1];
        if (index >= 0 && index < initialCode.length){
            initialCode = replacingAtIndex(index,char);
            console.log(initialCode);
            
        }else {
            console.log(`Index out of bounds.`);
            
        }
    }else if (action === `remove`){
        let substring = tokens[0];
        initialCode = deletingSubstring(substring);
        console.log(initialCode);
    }else {
        console.log(`Invalid command detected!`);
        
    }

    command = arr.shift()
}

}

solve(["Federation1",
    "Encrypt",
    "Decrypt",
    "Remove 1",
    "Substitute E e",
    "Scramble 2 X",
    "Encrypt",
    "Finalize"])
    
    