function digaonalAttack(arr) {

    let matrix = arr.map(row => row ? row.split(` `).map(Number) : [])

    let sumFirstDiagonal = 0;
    let sumSecondDigonal = 0;
    for (let i = 0; i < matrix.length; i++) {

        sumFirstDiagonal += matrix[i][i];
        sumSecondDigonal += matrix[i][matrix.length - 1 - i]
    }

   if (sumFirstDiagonal === sumSecondDigonal){

    for (let i = 0; i < matrix.length; i++){

        for (let j = 0; j < matrix.length; j++){
            if (i !== j && i !== matrix.length -j -1){
                matrix[i][j] = sumFirstDiagonal;
            }
        }
    }
   }

   let result = [];

   for (let i = 0; i <matrix.length; i++){
    result.push(matrix[i].join(` `))
   }
return result.join(`\n`)

}

console.log(digaonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
))