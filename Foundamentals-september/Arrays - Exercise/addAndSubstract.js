function solve(arr){
let sumOriginal = 0
let sumMod = 0
let nums = []
for (let i = 0; i < arr.length; i++){

    let currentNumb = arr[i]

    sumOriginal += currentNumb
    
    if (currentNumb % 2 === 0){
        currentNumb += i
        nums.push(currentNumb)
        sumMod += currentNumb
    }else{
        currentNumb -= i
        nums.push(currentNumb)
        sumMod += currentNumb
    }
    
}

console.log(`[ ${nums.join(`, `)} ]`);

console.log(sumOriginal);
console.log(sumMod);


}


solve([-5, 11, 3, 0, 2])