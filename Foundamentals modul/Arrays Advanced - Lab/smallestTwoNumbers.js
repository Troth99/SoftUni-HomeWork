function smallest(arr){

let result = arr.sort((a,b) => a-b);

let finalResult = result.slice(0 , 2)

console.log(finalResult.join(` `));



}

smallest([30, 15, 50, 5])