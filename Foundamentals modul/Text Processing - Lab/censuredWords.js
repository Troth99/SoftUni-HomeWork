function censoredWords(text, word){
while (text.includes(word)){

  let  censored = text.replace(word, (`*`.repeat(word.length)))
   text = censored
}

console.log(text);

}

censoredWords('A small sentence with some words', 'small')