function specialNumbers(input) {

    let index = 0
    let specialNumber = Number(input[0])

    let start = 1111;
    let end = 9999;
    let stringDigit = ''

    for (let i = start; i < end; i++) {

        let currentDigitAsString = String(i)

        
        let isSpecial = true
        for (let j = 0; j < currentDigitAsString.length; j++) {


            let currentDigit = Number(currentDigitAsString[j])

            if (specialNumber % currentDigit !== 0) {
               isSpecial = false;
               break
            }
            index++
        }
        if (isSpecial){
            stringDigit += `${currentDigitAsString} `
        }

    }

console.log(stringDigit);

}

specialNumbers(['16'])