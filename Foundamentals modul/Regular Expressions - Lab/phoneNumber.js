function getValidationNumber(arr){
let pattern = /\+359([- ])2\1\d{3}\1\d{4}\b/g

let numbersString = arr[0]

let matches = numbersString.match(pattern)

console.log(matches.join(`, `));



}

getValidationNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'])