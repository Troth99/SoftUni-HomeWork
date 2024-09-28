function maxNumber(arr) {

    let solve = []
    let takenElement = 0
    for (let i = 0; i < arr.length; i++) {
        let currentElement = arr[i]
        let isBigger = true
        takenElement = currentElement
        for (let j = i + 1; j < arr.length; j++) {

            nextElement = arr[j]

            if (currentElement < nextElement) {
               isBigger = false
            }else if (currentElement === nextElement){
                isBigger = false
            }
        }

      
        if (isBigger) {
            solve.push(takenElement)
        }

    }

    console.log(solve.join(` `));

}


maxNumber([41, 41, 34, 20])