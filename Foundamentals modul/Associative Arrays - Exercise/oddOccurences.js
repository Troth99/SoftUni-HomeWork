function oddOccurences(arr) {


    let occurences = new Map()


    let array = arr.split(` `)
    for (let i = 0; i < array.length; i++) {

        let currentWorld = array[i].toLowerCase()

        if (occurences.has(currentWorld)) {
            let curretNum = occurences.get(currentWorld)
            let newValue = curretNum += 1
            occurences.set(currentWorld, newValue)
        } else {
            occurences.set(currentWorld, 1)
        }

    }
    let printNews = new Map()
    for (let currentCheck of occurences) {

        if (currentCheck[1] % 2 !== 0) {
            printNews.set(currentCheck[0], currentCheck[1])
        }

    }

    let newToPrint = []

    for (let print of printNews) {

        newToPrint.push(print[0])

    }

    console.log(newToPrint.join(` `));


}



oddOccurences('Cake IS SWEET is Soft CAKE sweet Food')