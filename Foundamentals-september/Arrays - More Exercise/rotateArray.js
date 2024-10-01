function solve(arr) {

    let numberOfRottation = Number(arr.pop())

    
    for (let i = 1; i<= numberOfRottation; i++) {
        let lastChar = arr.pop(arr)
       
        arr.unshift(lastChar)
       
     
        }
    
    console.log(arr.join(` `));

}

solve(['1', '2', '3', '4', '2'])
//solve(['Banana', 'Orange', 'Coconut', 'Apple', '15'])