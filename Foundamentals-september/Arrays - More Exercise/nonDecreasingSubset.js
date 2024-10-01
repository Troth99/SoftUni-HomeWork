function solve(arr){

let biggestNumber = 0
let newArray = []

for (let i = 0; i < arr.length; i++){



    let currentNum = arr[i]

    if (currentNum >= biggestNumber){
        biggestNumber = currentNum
        newArray.push(biggestNumber)
    }
    
}


console.log(newArray.join(` `));


}


solve([ 20, 3, 2, 15, 6, 1])