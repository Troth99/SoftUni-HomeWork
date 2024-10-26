function solve(arr){

    let numberOfStudens = +arr[0]
    let numberOfTheLectures = +arr[1];
    let additionalBonus = +arr[2];

    let totalBonus = 0
    let attendedLecture = 0
    for (let i = 3; i < arr.length; i++){

     
        let studentAttendances = +arr[i]

        let currentPoints = (studentAttendances / numberOfTheLectures) * (5 + additionalBonus)
       

        if (currentPoints > totalBonus){
            totalBonus = currentPoints
            attendedLecture = studentAttendances
        }

    }
  
    console.log(`Max Bonus: ${Math.ceil(totalBonus)}.`);
    console.log(`The student has attended ${attendedLecture} lectures.`);
    

}


solve([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
  ]
  
  )