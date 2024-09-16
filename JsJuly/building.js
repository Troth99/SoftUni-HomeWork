function building (input){

let floor = Number(input[0])
let room = Number(input[1])

for (let currFloor = floor; currFloor > 0; currFloor--){
    let currentRow = ``

    for (let currRoom = 0; currRoom < room; currRoom++){

        if (currFloor === floor){
            currentRow += `L${currFloor}${currRoom} `
        }else if (currFloor %2 ===0){
            currentRow += `O${currFloor}${currRoom} `
        }else {
            currentRow += `A${currFloor}${currRoom} `
        }
    }

    console.log(currentRow);
    
}


}


building([`6` , `4`])