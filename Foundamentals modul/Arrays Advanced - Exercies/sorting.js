function sorting(arr) {

    let array1 = Array.from(arr)
    let newArray = []
    function isBiggestOne(arr1) {


       
        while (array1.length > 0) {
   
            let biggest = Math.max(...array1);
            let smallest = Math.min(...array1);

            newArray.push(biggest);
            if (array1.length > 1) {
                newArray.push(smallest);
            }

    
            array1.splice(array1.indexOf(biggest), 1);
            if (array1.length > 0) {
                array1.splice(array1.indexOf(smallest), 1);
            }
        }

        return newArray
    }

    let result = isBiggestOne(arr)

    console.log(result.join(` `));
    
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47])