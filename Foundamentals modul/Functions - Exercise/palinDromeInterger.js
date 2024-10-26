function palinDome(numbers){


for (let i = 0; i < numbers.length; i++){
    let isValid = true
    let currentNumber = numbers[i]

    
    let reversedNumber = ``

    let numAsString = currentNumber.toString().split(``)
    let checkNumber = numAsString.join(``)

    for (let j = numAsString.length -1; j >= 0; j--){
        let currentJnumber = numAsString[j]
        
        reversedNumber += currentJnumber
      
        
    }

    if (checkNumber !== reversedNumber){
       isValid = false
    }

    console.log(isValid);
    
}

}



palinDome([123,323,421,121])