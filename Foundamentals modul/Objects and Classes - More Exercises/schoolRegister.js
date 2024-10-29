function schoolRegister(arr){


    let totalStudents = []

    class Students{
        constructor(name, grade,averageScore){
            this.StudentName = name
            this.grade = grade
            this.averageAnualScore = averageScore
        }
    }

    
    for (let command of arr){

        let array = command.split(`, `)
        let name = array[0].split(`: `)[1]
        let grade = Number(array[1].split(`: `)[1])
        let averageScore = Number(array[2].split(`: `)[1])
       
        if (averageScore >= 3){

            let student = new Students(name, grade + 1, averageScore)
            totalStudents.push(student)
        }  
    }

    let gradeGroups = {}

    for (let student of totalStudents){
        if (!gradeGroups[student.grade]){
            gradeGroups[student.grade] =
            {
                students: [],
                totalScore: 0,
                count: 0
            }
        }
        gradeGroups[student.grade].students.push(student.StudentName)
        gradeGroups[student.grade].totalScore += student.averageAnualScore;
        gradeGroups[student.grade].count++
    }

    let outPut = []

    for (let grade in gradeGroups){
        let group = gradeGroups[grade]
        let averageScore = group.totalScore / group.count

        outPut.push({grade: Number(grade), students: group.students, averageAnualScore: averageScore})
    }
 
    
 outPut.sort((a,b) => a.grade - b.grade)

 for (let gradeInfo of outPut){
    console.log(`${gradeInfo.grade} Grade`);
    console.log(`List of students: ${gradeInfo.students.join(', ')}`);
    console.log(`Average annual score from last year: ${gradeInfo.averageAnualScore.toFixed(2)}`);
    console.log();
    
 }
    
}




schoolRegister([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
        "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
        "Student name: George, Grade: 8, Graduated with an average score: 2.83",
        "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
        "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
        "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
        "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
        "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
        "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
        "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
        "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
        "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
    ]
    )