function countString(text, word){

    let counter = 0

    let words = text.split(` `)


    for (let wordToMatch of words){
        
        if (wordToMatch === word){
            counter++
        }
        
    }

    console.log(counter);
    

}


countString('This is a word and it also is a sentence',
'is'
)