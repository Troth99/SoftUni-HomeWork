function solve(arr){

    while (arr.length > 1) {
        let condensed = [];
        
        
        for (let i = 0; i < arr.length - 1; i++) {
            condensed.push(arr[i] + arr[i + 1]);
        }
        
   
        arr = condensed;
    }
    
  
    console.log(arr[0]);
}


solve([5,0,4,1,2])