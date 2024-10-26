function theFinalQuest(arr) {

    let collection = arr.shift().split(` `)

    let command = arr.shift()


    while (command !== `Stop`) {

        let cmdInfo = command.split(` `)
        let action = cmdInfo[0].toLowerCase()

        if (action === `delete`) {

            let indexToDelete = Number(cmdInfo[1])

            if (indexToDelete >= 0 && indexToDelete < collection.length) {
                collection.splice(indexToDelete + 1, 1)
            }



        } else if (action === `swap`) {

            let wordOne = cmdInfo[1]
            let wordTwo = cmdInfo[2]

            if (collection.includes(wordOne) && collection.includes(wordTwo)) {

                let index = collection.indexOf(wordOne)
                let index2 = collection.indexOf(wordTwo)
                let temp = collection[index]
                collection[index] = collection[index2]
                collection[index2] = temp



            }
        } else if (action === `put`) {
            let word = cmdInfo[1]
            let index = Number(cmdInfo[2]) - 1

            if (index >= 0 && index <= collection.length) {

                collection.splice(index, 0, word);

            } else if (index === collection.length) {

                collection.push(wprd)
            }
        } else if (action === `sort`) {
            let sorted = collection.sort((a, b) => b.localeCompare(a))
            collection = sorted


        } else if (action === `replace`) {
            let wordOne = cmdInfo[1]
            let wordTwo = cmdInfo[2]

            if (collection.includes(wordTwo)) {
                let index = collection.indexOf(wordTwo)
                collection[index] = wordOne
            }
        }





        command = arr.shift()
    }

    console.log(collection.join(` `));

}


theFinalQuest([`Please, follow the instructions!`,
    `Put You 0`,
    `Delete 3`,
    `Replace me you`,
    `Replace follow know`,
    `Stop`])

