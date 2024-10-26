function solve(n, numbers) {

    let arr = []
   
    for (let i = 0; i < n; i++) {

     arr.push(numbers[i])
    }

    let reverse = []

    for (let j = arr.length-1; j>=0; j--){
        reverse.push(arr[j])
    }


    console.log(reverse.join(` `))

}

solve(3, [10, 20, 30, 40, 50])