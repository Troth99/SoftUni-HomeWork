function multiplyBy2(input){

   let number = Number(input.shift());
   let result = 0;
   while(true){
    if (number < 0){
        console.log(`Negative number!`)
        break;
    }
        result = number * 2;
        console.log (`Result: ${result.toFixed(2)}`)
        number = input.shift();
   }

}

multiplyBy2(["2" , "43.2144" , "12.3" , "543.23" , "-20"])