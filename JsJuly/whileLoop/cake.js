function cake(input){

    let index = 0
    let h = Number(input[index++])
    let w = Number(input[index++])

    let cakePiecesCount = h * w

    while (cakePiecesCount >= 0){

        let currentPiece = input[index]

        if (currentPiece === 'STOP'){
            let piecesLeft = cakePiecesCount
            console.log(`${piecesLeft} pieces are left.`);
            break;
            }

            currentPiece = Number(input[index])

            cakePiecesCount -= currentPiece
            index++
    }

if (cakePiecesCount <= 0){
    let piecesNeeded = Math.abs(cakePiecesCount)
    console.log(`No more cake left! You need ${piecesNeeded} pieces more.`);
    }
}

cake(["10",
    "2",
    "2",
    "4",
    "6",
    "STOP"])
    