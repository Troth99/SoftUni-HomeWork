function modernTimes(text){


let words = text.split(` `)


for (let word of words){

    if (word.startsWith(`#`) && /^[a-zA-z]+$/.test(word.slice(1))){
    
        console.log(word.slice(1));
        
    }else {
        continue
    }
    
}


}

modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign')