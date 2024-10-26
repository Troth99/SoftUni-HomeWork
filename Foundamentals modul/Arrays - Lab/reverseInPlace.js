function solve(array){

    let arr = []
    for (let i = 0; i< array.length; i++){
        arr.push(array[i])

    }
    let reverse = []

    for (let j = arr.length-1; j >= 0;j--){

        reverse.push(array[j])
    }
    

    console.log(reverse.join(` `));
    
}


solve(['a', 'b', 'c', 'd', 'e'])