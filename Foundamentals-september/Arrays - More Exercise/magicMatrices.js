function solve(array) {
    let rowSum = 0;

 
    for (let j = 0; j < array[0].length; j++) {
        rowSum += array[0][j];
    }

    let isHorizontal = true;
    let isVertical = true;


    for (let i = 1; i < array.length; i++) {
        let currentRowSum = 0;
        for (let j = 0; j < array[i].length; j++) {
            currentRowSum += array[i][j];
        }
        if (currentRowSum !== rowSum) {
            isHorizontal = false;
            break;
        }
    }

    for (let j = 0; j < array[0].length; j++) {
        let columnSum = 0;
        for (let i = 0; i < array.length; i++) {
            columnSum += array[i][j];
        }
        if (columnSum !== rowSum) {
            isVertical = false;
            break;
        }
    }

    if (isHorizontal && isVertical) {
        console.log('true');
    } else {
        console.log('false');
    }
}







solve([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
   
   
)
