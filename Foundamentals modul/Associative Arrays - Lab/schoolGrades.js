function schoolGrades(arr){

let storeStudents = new Map()

for (let students of arr){
    let [studentName, ...grade] = students.split(` `)
    grade = grade.map(Number)

    if (storeStudents.has(studentName)){
        let existingStudent = storeStudents.get(studentName)
        storeStudents.set(studentName, existingStudent.concat(grade))
    }else {
        storeStudents.set(studentName, grade)
    }
   
    
}

storeStudents = Array.from(storeStudents.entries()).sort((a, b) => a[0].localeCompare(b[0]))

for (let student of storeStudents){
    let averageGrade = 0

    let name = student[0]
    let grade = student[1]

    for (let currentGrade of grade){
        averageGrade += currentGrade
    }

    let averageGradeSum = averageGrade / grade.length

    console.log(`${name}: ${averageGradeSum.toFixed(2)}`);
    
}
}

schoolGrades(['Steven 3 5 6 4',
    'George 4 6',
    'Tammy 2 5 3',
    'Steven 6 3']
    
    )