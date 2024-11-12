function stringSubstring(word, text){

text = text.split(` `)

let words = []
for (let info of text){

    if (word === info.toLowerCase()){
        words.push(word)
    }
}

if (words.length > 0){
    console.log(words.join(` `));
}else {
    console.log(`${word} not found!`);
    
}


}

stringSubstring('javascript',
'JavaScript is the best programming language'
)