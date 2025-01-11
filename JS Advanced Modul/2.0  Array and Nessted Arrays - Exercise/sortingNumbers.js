function sortingNumbers(input){
let sorted = [];
let findSmallest = 0;
let findTheBiggest = 0;

while (input.length > 0){
    findSmallest = Math.min(...input)
    let index = input.indexOf(findSmallest);
    input.splice(index, 1);
    sorted.push(findSmallest)
    if (input.length > 0){
        findTheBiggest = Math.max(...input)
        let indexBig = input.indexOf(findTheBiggest);
        input.splice(indexBig, 1);
        sorted.push(findTheBiggest); 

    }
 
}
return sorted

}

sortingNumbers([22, 9, 63, 3, 2, 19, 54, 11, 21, 18])