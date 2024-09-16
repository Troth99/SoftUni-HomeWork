function didiveBy9(input){

 let start = Number(input[0]);
 let end = Number(input[1]);
 let sum = 0;

 for (let currentNum = start; currentNum <= end; currentNum ++){
        if(currentNum % 9 === 0){
            sum +=currentNum;
        }
 }
console.log(`The sum: ${sum}`)

for (let currentNum = start; currentNum <= end; currentNum ++){
    if(currentNum % 9 === 0){
        console.log(currentNum);
    }
}
}

didiveBy9(['100' , '200'])