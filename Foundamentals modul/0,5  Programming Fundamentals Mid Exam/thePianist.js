function thePianist(arr) {

    let numberOfPieces = Number(arr.shift())

    let musics = {}

    for (let i = 0; i < numberOfPieces; i++) {
        let pieces = arr[i].split(`|`)

        let piece = pieces[0]
        let compositor = pieces[1]
        let key = pieces[2]

        if (!musics[piece]) {
            musics[piece] = { compositor, key }

        }
    }

    arr.splice(0, numberOfPieces)

    let command = arr.shift()

    while (command !== `Stop`) {

        let info = command.split(`|`)
        let action = info[0]

        if (action === `Add`) {

            let piece = info[1]
            let compositor = info[2]
            let key = info[3]

            if (musics.hasOwnProperty(piece)) {

                console.log(`${piece} is already in the collection!`);

            } else {
                musics[piece] = { compositor, key }
                console.log(`${piece} by ${compositor} in ${key} added to the collection!`);

            }
        } else if (action === `Remove`) {

            let piece = info[1]

            if (musics.hasOwnProperty(piece)) {
                delete musics[piece]
                console.log(`Successfully removed ${piece}!`);

            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);

            }


        } else if (action === `ChangeKey`) {

            let piece = info[1]
            let newKey = info[2]

            if (musics.hasOwnProperty(piece)) {
                musics[piece].key = newKey
                console.log(`Changed the key of ${piece} to ${newKey}!`);

            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);

            }

        }





        command = arr.shift()
    }

    let entries = Object.entries(musics)

    for (let entry of entries) {

        let piece = entry[0]
        let details = entry[1]
        let composer = details.compositor
        let key = details.key
        console.log(`${piece} -> Composer: ${composer}, Key: ${key}`);
    }

}

thePianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
]

)