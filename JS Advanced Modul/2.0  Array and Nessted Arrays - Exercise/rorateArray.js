function rotateArray(input, rotateLength){

rotateLength = Number(rotateLength)

for (let i = 0; i < rotateLength; i++){
    let rotate = input.pop()
    input.unshift(rotate)
}
console.log(input.join(` `));

}

rotateArray(['Banana', 
    'Orange', 
    'Coconut', 
    'Apple'], 
    15 
    )