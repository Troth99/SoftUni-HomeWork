function weddingPlace (input){

    let lastSector = input[0]
    let sectorRowOne = Number(input[1]);
    let oddRow = Number(input[2]);

    let firstCharNum = `a`.charCodeAt(0);
    let totalSeats = 0

    let firstChar = `A`
    let buffer = ``

    for (let i = firstChar.charCodeAt(0); i <=lastSector.charCodeAt(0); i++){
        for (let row = 1; row <= sectorRowOne; row++){
            if (row % 2 !== 0){
                for (let j = firstCharNum; j < firstCharNum + oddRow; j++){
                    let currentLetter = String.fromCharCode(i)
                    let currentSmallLetter = String.fromCharCode(j)
                    console.log(`${currentLetter}${row}${currentSmallLetter}`);
                    totalSeats++
                }
            }else {
                for (let j = firstCharNum; j < firstCharNum + oddRow + 2; j++){
                    let currentLetter = String.fromCharCode(i)
                    let currentSmallLetter = String.fromCharCode(j)
                    console.log(`${currentLetter}${row}${currentSmallLetter}`);
                    totalSeats++
            }
        }
    }
    sectorRowOne++


}
console.log(totalSeats);

}

weddingPlace([`B`, `3`, `2`])