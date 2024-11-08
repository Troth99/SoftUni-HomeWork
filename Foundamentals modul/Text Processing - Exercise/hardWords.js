function hardWords(arrayOftext) {

    let text = arrayOftext.shift().split(` `)
    let replaceWords = arrayOftext.shift()
    for (let i = 0; i < text.length; i++) {
        let word = text [i]

            if (word.includes(`_`)) {
                let endsWIthDot = false
                let endsWIthComa = false

                if (word.endsWith(`.`)){
                endsWIthDot = true
                word = word.slice(0, -1)

                }
                if (word.endsWith(`,`)){
                    endsWIthComa = true
                    word = word.slice(0, -1)
                }
            
               for (let replace of replaceWords){
                if (replace.length === word.length){
                    if(endsWIthDot){
                        text[i] = replace + '.'
    
                    }else if (endsWIthComa){
                        text[i] = replace + `,`
                    }
                    else {
                        text[i] = replace
                    }
                }
          
               }
            
        }



    }

    console.log(text.join(` `));



}

hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
    )