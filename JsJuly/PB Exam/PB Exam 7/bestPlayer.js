function bestPlayer(input){

    let index = 0;

    let name = '';
    let goals = 0

    while(index < input.length){

        let command = input[index]
        if (command === `END`){
            break;
        }
        let currentName = input[index++]
        
   

        let currentGoals = Number(input[index++])

        
            if (currentGoals > goals){
                goals = currentGoals
                name = currentName
                
            }

    }

    console.log(`${name} is the best player!`);
    if (goals >= 3){
        console.log(`He has scored ${goals} goals and made a hat-trick !!!`);
     } else {
        console.log(`He has scored ${goals} goals.`);
        
     }
     


}

bestPlayer(["Neymar", "2",
    "Ronaldo",
    "1",
    "Messi",
    "3",
    "END"])
    