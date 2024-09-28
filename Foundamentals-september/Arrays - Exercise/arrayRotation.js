function rotate(arr1, rotation){

    for (let i = 1; i <= rotation; i++){

    let firstElement = arr1.shift()

        arr1.push(firstElement)

}

console.log(arr1.join(` `));

}


rotate([51, 47, 32, 61, 21], 2)