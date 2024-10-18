function solve(arr){

    let battlesWin = 0
    
    let initialEnergy = Number(arr.shift())
    
    
    for (let command of arr){
    
        if (command === `End of battle`){
            console.log(`Won battles: ${battlesWin}. Energy left: ${initialEnergy}`);
            break;
            
        }
     
        let distance = Number(command)

        if (initialEnergy < distance){
            console.log(`Not enough energy! Game ends with ${battlesWin} won battles and ${initialEnergy} energy`);
            break;
        }
        
        
       
        initialEnergy -= distance
        battlesWin++
       
        if (battlesWin % 3 === 0){
            initialEnergy += battlesWin
        }
       
    
        
    }
    
    
    
    
    }


solve(["100",
    "10",
    "10",
    "10",
    "1",
    "2",
    "3",
    "73",
    "10"])
    