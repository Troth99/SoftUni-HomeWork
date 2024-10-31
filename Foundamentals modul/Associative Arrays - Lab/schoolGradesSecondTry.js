function schoolGrades(arr){

let studentsAndGrades = {}

for (let students of arr){
    let [name, ...grade] = students.split(` `)
    

    if (studentsAndGrades.hasOwnProperty(name)){
        
        studentsAndGrades[name].push(...grade)
    }else {
        studentsAndGrades[name] = grade
    }
}

let sortedStudents = Object.keys(studentsAndGrades).sort((firstName, secondName) => firstName.localeCompare(secondName))

for (let student of sortedStudents){
    
    let avgGrade = 0

    let grade = studentsAndGrades[student].map(n => Number(n))

    for (let currentGrade of grade){
        
        avgGrade += currentGrade
        
    }
    let averageGrade = avgGrade / grade.length

    console.log(`${student}: ${averageGrade.toFixed(2)}`);
    
}
}

schoolGrades(['Steven 3 5 6 4',
    'George 4 6',
    'Tammy 2 5 3',
    'Steven 6 3']
    
    )