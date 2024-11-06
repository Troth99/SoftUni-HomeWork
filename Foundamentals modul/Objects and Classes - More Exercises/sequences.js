function sequences(arr){

let uniqueArrays = new Map()

let parsedArr= arr.map(JSON.parse)


for (let array of parsedArr){

    let sortedArray = array.slice().sort((a, b) => a - b)

    let arrayAsString = JSON.stringify(sortedArray)
    if (!uniqueArrays.has(sortedArray)){
        uniqueArrays.set(arrayAsString, sortedArray)
    }

}

let sortedUniqueArrays = Array.from(uniqueArrays.values()).sort((a,b) => a.length - b.length)

for (let array of sortedUniqueArrays){
    console.log(`[${array.sort((a,b) => b-a).join(`, `)}]`);
    
}

}

sequences(["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"]
    )