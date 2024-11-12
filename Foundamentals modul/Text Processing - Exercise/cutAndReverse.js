function cutAndReverse(text){

let middleIndex = text.length / 2

let leftWord = text.slice(0, middleIndex)
let rightWord = text.slice(middleIndex)
let reversedLeft = leftWord.split(``).reverse().join(``)
let reversedRight = rightWord.split(``).reverse().join(``)


console.log(reversedLeft);
console.log(reversedRight);


}


cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')