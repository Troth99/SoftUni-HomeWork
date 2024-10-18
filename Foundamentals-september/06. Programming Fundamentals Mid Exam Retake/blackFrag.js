function solve(arr){

    
    let days = +arr.shift()
    let dailyPlunder = +arr.shift()
    let target = +arr.shift()
    let totalPlunder = 0
    for (let i = 1; i <= days; i++){

        totalPlunder += dailyPlunder

        if ( i % 3 === 0){
            totalPlunder += dailyPlunder * 0.5
        }

        if ( i % 5 === 0){
            totalPlunder -= totalPlunder * 0.3
        }

      
    }
    if (totalPlunder >= target){
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    }else {
        let percentage = totalPlunder * 100 / target
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
        
    }
    

  
    
}


solve((["10",
    "20",
    "380"])
    
    )