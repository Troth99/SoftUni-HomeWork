function solve(arr){
let newArray = []
let counter = 1

for (let i = 0; i < arr.length; i++)
{

let currentElement = arr[i]

if (currentElement === `add`){
    
    newArray.push(counter)
    counter++
}else if (currentElement ===`remove`){
    counter++
    newArray.pop()
  
}



}
if (newArray.length === 0){
    console.log(`Empty`);
    
}
    

console.log(newArray.join(` `));


}



solve(['remove', 'remove', 'remove'])