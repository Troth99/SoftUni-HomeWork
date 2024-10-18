function theImitationGame(arr) {


    let encryptedMsg = arr.shift()
    for (let i = 0; i < arr.length; i++) {

        let commandInfo = arr[i]
        let command = commandInfo.split(`|`)[0]

        if (command === `Decode`) {
            break;
        }

        if (command === `ChangeAll`) {

            let substring = commandInfo.split(`|`)[1]
            let replacement = commandInfo.split(`|`)[2]

            let replace = ``
            for (let j = 0; j < encryptedMsg.length; j++){

                let currentElement = encryptedMsg[j]
             
        
                if (currentElement === substring){
                    replace += replacement
                }else {
                    replace += currentElement
                }
                
            }

            encryptedMsg = replace

        } else if (command === `Insert`) {

            let index = +commandInfo.split(`|`)[1]
            let value = commandInfo.split(`|`)[2];
            let changed = encryptedMsg.split(``)
            changed.splice(index, 0, value)
            let joined = changed.join(``)
            encryptedMsg = joined

        } else if (command === `Move`) {
            let numberOfLetters = +commandInfo.split(`|`)[1]
            let spllitedElements = encryptedMsg.split(``)
            let movedLetters = spllitedElements.splice(0, numberOfLetters).join(``)
            spllitedElements.push(movedLetters)
            let joined = spllitedElements.join(``)
            encryptedMsg = joined


        }

    }



    console.log(`The decrypted message is: ${encryptedMsg}`);




}

theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
]

)