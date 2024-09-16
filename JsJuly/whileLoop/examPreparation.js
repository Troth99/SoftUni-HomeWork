function exams(input){

    let unwantedGrade = Number(input[0])
    let index = 1
    let nameTask = input[index]
    index++
    let gradeTask = Number(input[index])
    index++

    let theLastTask = ''
    let totalSum = 0
    let badGrade = 0
    let goodGrades = 0;

    while(nameTask !== `Enough`){

        totalSum += gradeTask

        if (badGrade >= unwantedGrade){
            console.log(`You need a break, ${badGrade} poor grades.`);
            
            break;
        }
      
        if (gradeTask <= 4){
            badGrade++
        }
        goodGrades++
        
        
        theLastTask = nameTask
        nameTask = input[index]
        index++
        gradeTask = Number(input[index])
        index++

        
    }
    let averageSum = totalSum / goodGrades

    if (nameTask === `Enough`){
        console.log(`Average score: ${averageSum.toFixed(2)}`);
        console.log(`Number of problems: ${goodGrades}`);
        console.log(`Last problem: ${theLastTask}`);
    }


}

/*exams(["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"]) */

    exams(["2",
        "Income",
        "3",
        "Game Info",
        "6",
        "Best Player",
        "4"])
        
    