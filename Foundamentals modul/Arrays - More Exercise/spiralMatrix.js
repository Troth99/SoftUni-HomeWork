function spiral(row, col) {

    let arr = Array.from({ length: row }, () => Array(col).fill(0)); 
    let row1 = 0;
    let col1 = 0;

    let rowEnd = row - 1;
    let colEnd = col - 1;
    let counter = 1;

    while (col1 <= colEnd && row1 <= rowEnd) {
    
        for (let i = col1; i <= colEnd; i++) {
            arr[row1][i] = counter;
            counter++;
        }
        row1++;

  
        for (let i = row1; i <= rowEnd; i++) {
            arr[i][colEnd] = counter;
            counter++;
        }
        colEnd--;

      
        if (row1 <= rowEnd) {
            for (let i = colEnd; i >= col1; i--) {
                arr[rowEnd][i] = counter;
                counter++;
            }
            rowEnd--;
        }

   
        if (col1 <= colEnd) {
            for (let i = rowEnd; i >= row1; i--) {
                arr[i][col1] = counter;
                counter++;
            }
            col1++;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i].join(' '))
}
}

spiral(3, 3)