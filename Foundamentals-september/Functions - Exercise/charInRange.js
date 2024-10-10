function charInRange(firstChar, secondChar){

    let str = ``
    let first = firstChar.charCodeAt()
    let second = secondChar.charCodeAt()

    if (second < first ){
        let firstNum = first
        let secondNum = second
        second = firstNum
        first = secondNum
    }
    while (first + 1 < second){
        
        
        first ++
    
        let inBetween = String.fromCharCode(first)
        str += `${inBetween} `
        
    }
   return str
    }

    console.log(charInRange('a',
'd'));
    

