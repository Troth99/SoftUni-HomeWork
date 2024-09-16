function grades(input) {

    let index = 0;
    let studentsNumber = Number(input[index]);
    index++

    let under3 = 0;
    let between3And399 = 0;
    let between4And499 = 0
    let above5 = 0
    let averageStudents = 0

    for (let grade = 0; grade < studentsNumber; grade++) {

        let currentGrade = Number(input[index])
        index++
        

        if (currentGrade >= 2.00 && currentGrade <= 2.99){
            under3++
        }else if (currentGrade >= 3.00 && currentGrade <= 3.99){
            between3And399++
        }else if (currentGrade >= 4.00 && currentGrade <= 4.99){
            between4And499++
        }else if (currentGrade >= 5.00){
           above5++
        } 
        
        averageStudents += currentGrade / studentsNumber
        
     }
     
     let percentageAbove5 = above5 / studentsNumber *100
     let percentageBetween4And5 = between4And499 / studentsNumber *100
     let percentageBetween3And4 = between3And399 / studentsNumber *100
     let percentageUnder3 = under3 / studentsNumber *100

     console.log(`Top students: ${percentageAbove5.toFixed(2)}%`)
     console.log(`Between 4.00 and 4.99: ${percentageBetween4And5.toFixed(2)}%`)
     console.log(`Between 3.00 and 3.99: ${percentageBetween3And4.toFixed(2)}%`)
     console.log(`Fail: ${percentageUnder3.toFixed(2)}%`)
     console.log(`Average: ${averageStudents.toFixed(2)}`);
     
     
  
      }

//grades([`10`, `3.00`, `2.99`, `5.68`, `3.01`, `4`, `4`, `6.00`, `4.50` , `2.44` , `5`])
grades([`6 `,`2` ,`3` ,`4` ,`5` ,`6` ,`2.2`])
