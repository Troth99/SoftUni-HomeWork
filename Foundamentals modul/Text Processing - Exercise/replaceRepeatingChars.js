function replace(text){


let word = ``

text = text.split(``)

let previousLetter = ``
for (let letter of text){

    if (previousLetter !== letter){
        word += letter

    }
    previousLetter = letter


}


console.log(word);

}

replace('aaaaabbbbbcdddeeeedssaa')