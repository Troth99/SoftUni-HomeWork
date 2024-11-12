function valueOfStrings(arr){

let string = arr.shift()
let possibleInputs = arr.shift()

let totalSum = 0
for (let letter of string){


    if (possibleInputs === `UPPERCASE`){
        if (/^[A-Z]+$/.test(letter)){
            let code = letter.charCodeAt()

            totalSum += code
            
        }


    }else if (possibleInputs === `LOWERCASE`){
        if (/^[a-z]+$/.test(letter)){
           let code = letter.charCodeAt()
           
           totalSum += code
            
        }
    }

    
}

console.log(`The total sum is: ${totalSum}`);


}


valueOfStrings(['AC/DC',
    'UPPERCASE']
    
    )