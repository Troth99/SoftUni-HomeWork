function solve(arr){

    let maxSequence = [];
    let currentSequence = [arr[0]];
for (let i = 0; i <arr.length; i++){

    
    if (arr[i] !== arr[i - 1]) { 
        if (currentSequence.length > maxSequence.length) { 
          maxSequence = currentSequence;
        }
        currentSequence = [arr[i]]; 
        continue;
      }
      currentSequence.push(arr[i]);
    }

    console.log(maxSequence.join(` `));
    
}




solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])