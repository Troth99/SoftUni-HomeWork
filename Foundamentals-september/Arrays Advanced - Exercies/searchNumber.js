function searchNumber(arr, numbersToDelete){


    function checkForCount(numbers){
        for (let command of takeElements){

            if (command === searchNumber){
                numberTimes++
            }
        }
        return numberTimes
    }
let numberTimes = 0


let takeNumbers = numbersToDelete.shift()
let numbersOfElements = numbersToDelete.shift()
let searchNumber = numbersToDelete.shift()

let takeElements = arr.slice(0, takeNumbers)
takeElements.splice(0, numbersOfElements)

let result = checkForCount(takeElements)

console.log(`Number ${searchNumber} occurs ${result} times.`);









}

searchNumber([7, 1, 5, 8, 2, 7],
    [3, 1, 5]
    
    )