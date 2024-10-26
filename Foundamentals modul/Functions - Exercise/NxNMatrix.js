function matrix(n){

    let arr = []
    let col1 = 0

    function rows(number){

        for (let i = col1; i < n; i++) {
            arr[i] = number;
    
        }
        return arr
    }


   let rowsAsRes = rows(n)

   

    for (let i = 0; i<  rowsAsRes.length; i++){
        console.log(rowsAsRes.join(` `));
    }
  
   
   
   

}


matrix(7)