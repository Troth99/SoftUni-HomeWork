function theMostPowerFullWord(input) {

    let index = 0
    let currentIndex = input[index]
    let winWord = ``
    let totalSum = Number.NEGATIVE_INFINITY

    while (currentIndex !== `End of words`) {

        let currentWord = input[index]

        let sumCurrent = 0

        for (let i = 0; i < currentWord.length; i++) {

            let ascii = currentWord.charCodeAt(i)

            sumCurrent += ascii

    }

        let f = currentWord.charAt(0)
        let l = currentWord.length
        if (f === `a` || f === `e` || f === `i` || f === `o` || f === `u` || f === `y`) {
            sumCurrent *= l
        } else if (f === `A` || f === `E` || f === `I` || f === `O` || f === `U` || f === `Y`) {
            sumCurrent *= l
        }else {
            sumCurrent  /= l
        }

        if (sumCurrent > totalSum){
            totalSum = sumCurrent
            winWord = currentWord
        }

            index++
            currentIndex = input[index]
        }


        console.log(`The most powerful word is ${winWord} - ${Math.round(totalSum)}`);
        
}



    theMostPowerFullWord(["But",
        "Some",
        "People",
        "Say",
        "It's",
        "LOVE",
        "End of words"])
        