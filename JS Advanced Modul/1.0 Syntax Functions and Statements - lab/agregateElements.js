function agregate(arr){
arr.map(Number)

let sum = 0;
let sum1 = 0;
let concat = ''
for (const number of arr) {
    sum += number;
    sum1 += 1 / number
    concat = concat.concat(number)
}
console.log(sum);
console.log(sum1);
console.log(concat);

}

agregate([2, 4, 8, 16])