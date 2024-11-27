function minorWords(arr){

let string = arr[0]
let patternt = /([@#])(?<word>[a-zA-Z]{3,})\1{2}(?<word2>[a-zA-Z]{3,})\1/g

let mirrorWords = []

let matchWord = string.matchAll(patternt)
let validPairsCount = 0
if (matchWord){

    for (let word of matchWord){
       
        let wordOne = word.groups.word
        let wordTwo = word.groups.word2

        let reversed = wordTwo.split(``).reverse().join(``)

        if (wordOne === reversed){
            
            mirrorWords.push(wordOne, wordTwo)
            
        }
        validPairsCount++
    } 
}

if (validPairsCount > 0){
    console.log(`${validPairsCount} word pairs found!`);
}else {
    console.log(`No word pairs found!`);
}
if (mirrorWords.length === 0){
    console.log(`No mirror words!`);
}else {
    console.log(`The mirror words are:`);
   let formatedPairs = []

   for (let i = 0; i < mirrorWords.length; i+=2){

    let wordOne = mirrorWords[i]
    let wordTwo = mirrorWords[i+1]
    formatedPairs.push(`${wordOne} <=> ${wordTwo}`)

   }

    console.log(formatedPairs.join(`, `));
    
}
}

minorWords([ `@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r`	 ]
    )