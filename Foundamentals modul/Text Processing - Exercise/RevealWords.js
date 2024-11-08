function revealWords(wordToReplaceWIth, text) {
    let wordsInarr = wordToReplaceWIth.split(`, `)
    let wordsText = text.split(` `)
    for (let word of wordsInarr) {

        for (let wordInText of wordsText) {

            if (wordInText.includes(`*`)) {

                if (wordInText.length === word.length) {
                    let index = wordsText.indexOf(wordInText)
                    wordInText = word
                    wordsText[index] = word


                   
                }
            }
           
        }

    }




    console.log(wordsText.join(` `));

}

revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages'
)