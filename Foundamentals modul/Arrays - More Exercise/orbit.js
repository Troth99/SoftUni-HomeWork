function solve(arr){


    let width = arr[0]
    let height = arr[1]
    let x = arr[2]
    let y = arr[3]

let orbitMatrix = []



for (let i = 0; i < width; i++){
    orbitMatrix.push([])

}

for (let j = 0; j < width; j++){

    for (let k = 0; k < height; k++){
        orbitMatrix[j][k] = Math.max(Math.abs(j - x), Math.abs(k - y)) + 1;
    }
}


console.log(orbitMatrix.map(width=>width.join(` `)).join(`\n`));

}


solve([4, 4, 0, 0])