function pieceOfPie(arr, startFlavor, endFlavor){

    let result = [];
    for (let i = 0; i < arr.length; i++){

        let element = arr[i];

        if (element === startFlavor){
           for (let j = i; j < arr.length; j++){
            result.push(arr[j]);

            if (arr[j] === endFlavor){
                return result;
            }
           }
        
        }  
    }
    return result;
    
}

console.log(pieceOfPie(['Apple Crisp',
    'Mississippi Mud Pie',
    'Pot Pie',
    'Steak and Cheese Pie',
    'Butter Chicken Pie',
    'Smoked Fish Pie'],
   'Pot Pie',
   'Smoked Fish Pie'
   ))