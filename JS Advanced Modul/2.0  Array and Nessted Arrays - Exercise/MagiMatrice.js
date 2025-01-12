function magicMatrice(input) {

    if (!input.length) return true;

    let firstRow = input[0].reduce((acc, num) => acc + num, 0)

    for (let i = 1; i < input.length; i++) {

        let rowSum = input[i].reduce((acc, num) => acc + num, 0);
        if (rowSum !== firstRow) {
            return false;
        }
    }

let numCols = input[0].length;

for (let col = 0; col < numCols; col++){
    let colSum = 0;

    for (let row = 0; row < input.length; row++){
        colSum += input[row][col];
    }

    if (colSum !== firstRow){
        return false
    }
}

return true


}
//input
console.log(magicMatrice([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]
))
//output true


// magicMatrice([[11, 32, 45],
//      [21, 0, 1],
//    [21, 1, 1]] )
//output true