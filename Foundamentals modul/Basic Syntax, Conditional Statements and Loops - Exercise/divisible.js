function solve(div){


    let divideNum = 0

     if (div % 10 === 0){
        divideNum = 10
        console.log(`The number is divisible by ${divideNum}`);
     }else if (div % 7 ===0){
        divideNum = 7
        console.log(`The number is divisible by ${divideNum}`);
     }else if (div % 6 === 0){
        divideNum = 6
        console.log(`The number is divisible by ${divideNum}`);
     }else if ( div % 3 === 0 ){
        divideNum = 3
        console.log(`The number is divisible by ${divideNum}`);
     }else if (div % 2 === 0){
        divideNum = 2
        console.log(`The number is divisible by ${divideNum}`);
     }else {
        console.log(`Not divisible`);
     }
     
        
        
    
    }


   
 






solve(30)