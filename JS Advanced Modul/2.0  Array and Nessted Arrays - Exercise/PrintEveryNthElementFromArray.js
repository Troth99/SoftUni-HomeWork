function printing (input, num){
num = Number(num);
const result = []
for (let i = 0; i < input.length; i++){
    if (i % num === 0){
        result.push(input[i])
    }
}
    
return result;

}

printing(['1', 
    '2',
    '3', 
    '4', 
    '5'], 
    6

    )