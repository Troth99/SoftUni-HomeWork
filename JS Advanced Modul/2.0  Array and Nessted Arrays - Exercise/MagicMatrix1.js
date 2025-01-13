function solve (matrix){

let totalSum = matrix[0].reduce((acc, curr) => acc + curr, 0);

for (let row = 0; row < matrix.length; row++){
    let sumrow = 0;
    let sumCol = 0;

    for (let col = 0; col < matrix.length; col++){
        sumCol += matrix[row][col];
        sumrow += matrix[col][row];

    }

    if (totalSum !== sumrow || totalSum !== sumCol){
        return false
    }
}


return true

}

console.log(solve([[4, 5, 6],
    [6, 5, 4],
    [5, 3, 5]]
   ));

