function ds (arr){

let result = arr.filter((x, index) => arr.indexOf(x) === index)


console.log(result.join(` `));



}


//ds([1, 2, 3, 4])
ds([7, 8, 9, 7, 2, 3, 4, 1, 2])