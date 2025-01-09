function sumFirstLast(arr){
arr = arr.map(Number)
let firstElement = arr.shift();
let lastElement = arr.pop();
console.log(firstElement + lastElement);


}


sumFirstLast(['20', '30', '40'])