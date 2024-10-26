function sequence (n, k){

   

    let newArr = [1]

    while (newArr.length < n){
        let sum = 0
        let lastKNums = newArr.slice(-k)

        for (let num of lastKNums){
            sum += num
        }

        newArr.push(sum)
    }


console.log(newArr.join(` `));



}

sequence(6, 3)