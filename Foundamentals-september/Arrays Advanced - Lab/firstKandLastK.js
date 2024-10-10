function firstKandLastK(arr){

 let k = arr.shift()

 let firstKelements =arr.slice(0, k)
let lastKelements = arr.slice(-k);

console.log(firstKelements.join(` `));
console.log(lastKelements.join(` `));






}

firstKandLastK([2, 
    7, 8, 9]
    )