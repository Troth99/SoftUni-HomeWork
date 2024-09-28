function merge(arr1, arr2) {
    let arr3 = [];

    for (let i = 0; i < arr1.length; i++) {
        let currentNummArr1 = arr1[i];
        let currentNummArr2 = arr2[i];

        let result;
        if (i % 2 === 0) {
    
            result = Number(currentNummArr1) + Number(currentNummArr2);
        } else {
   
            result = currentNummArr1 + currentNummArr2;
        }

 
        arr3.push(result);
    }

    console.log(arr3.join(' - '));
}





merge(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11'])

