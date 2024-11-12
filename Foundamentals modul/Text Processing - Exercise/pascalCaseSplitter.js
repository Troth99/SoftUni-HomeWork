function pascalCase(text){
let spliitedText = []

text = text.split(``)

let lastWord = ``
for (let letter of text){

    if (letter === letter.toUpperCase() && spliitedText.length <= 0){
       spliitedText.push(letter)

    }else if (letter === letter.toUpperCase() && spliitedText.length !== 0){
        spliitedText.push(`, `)
        spliitedText.push(letter)
    }else if (letter.toLowerCase()){
        spliitedText.push(letter)
        lastWord = letter
    }

}
let textAsStr = spliitedText.join(``)
console.log(textAsStr);



}

pascalCase('ThisIsSoAnnoyingToDo')