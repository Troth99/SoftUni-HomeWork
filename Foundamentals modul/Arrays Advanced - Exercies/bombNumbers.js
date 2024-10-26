function detonateBombs(arr, bombInfo){

let specialNumber = +bombInfo.shift()
let bombPower =+ bombInfo.shift()



    let findElement = arr.indexOf(specialNumber)

    while(findElement !== -1){

        let bombStartIndex = findElement - bombPower

        if(bombStartIndex < 0){
            bombStartIndex = 0
        }

        let bombEndIndex = findElement + bombPower

        if(bombEndIndex >= arr.length){
            bombEndIndex = arr.length - 1
        }

        let numbersCount = bombEndIndex - bombStartIndex + 1
        arr.splice(bombStartIndex, numbersCount)

        findElement = arr.indexOf(specialNumber)
    }

    let sum = arr.reduce((acc , curr) => {return acc + curr} , 0)

    console.log(sum);
    
   




   }





detonateBombs([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]
    )