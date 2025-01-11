function equals(arr) {
        let counter = 0;
    
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
     
                if (j < arr[i].length - 1 && arr[i][j] === arr[i][j + 1]) {
                    counter++;
                }
    
         
                if (i < arr.length - 1 && arr[i][j] === arr[i + 1][j]) {
                    counter++;
                }
            }
        }
    
        console.log(counter);
}
equals([['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']]
   )