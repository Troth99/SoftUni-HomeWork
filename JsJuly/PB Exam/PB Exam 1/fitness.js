function fitness(input){

    let index = 0
    let peopleInGym = Number(input[index++]);

    let back = 0
    let chest = 0
    let legs = 0
    let abs = 0
    let proteinShake = 0
    let proteinBar = 0


    while(index <= input.length){

        let currentIndex = input[index]

        switch(currentIndex){
            case 'Back':
                back++
                break;
            case `Chest`:
                chest++
                break;
            case `Legs`:
                legs++
                break;
            case `Abs`:
                abs++
                break;
            case `Protein shake`:
                proteinShake++
                break;
            case `Protein bar`:
                proteinBar++
                break;
            }

        index++
    }

   let workOut = abs + legs + chest +back
    let protein = proteinBar + proteinShake

    let workoutPeople = (workOut * 100) / peopleInGym
    let percentageBar = (protein* 100) / peopleInGym
    console.log(`${back} - back`);
    console.log(`${chest} - chest`);
    console.log(`${legs} - legs`);
    console.log(`${abs} - abs`);
    console.log(`${proteinShake} - protein shake`);
    console.log(`${proteinBar} - protein bar`);
    console.log(`${workoutPeople.toFixed(2)}% - work out`);
    console.log(`${percentageBar.toFixed(2)}% - protein`);
    
}


fitness(["7",
    "Chest",
    "Back",
    "Legs",
    "Legs",
    "Abs",
    "Protein shake",
    "Protein bar"])
    
    