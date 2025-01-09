function validityCheckr(x1, y1, x2, y2){


    function checkValids(x1, y1, x2, y2){

        let result = Math.sqrt((x2 - x1) ** 2 + ((y2 - y1) ** 2))

        if (Number.isInteger(result)){
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);     
        }else{
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    
        }

    }


    checkValids(x1,y1, 0, 0)
    checkValids(x2, y2, 0, 0)
    checkValids(x1, y1, x2, y2)

}

validityCheckr(2, 1, 1, 1)