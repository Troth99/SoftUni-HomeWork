function solve(arr){

let storedInformation = [];


for (const element of arr) {
    
    if (element.includes(`:`)){
        let [courseName, capacity] = element.split(`: `)
        capacity = Number(capacity)

        let ifExist = storedInformation.find(x => x.Course === courseName)

        if (ifExist){
            ifExist.capacity += capacity;
          continue
        }

        let obj = {
            Course: courseName,
            capacity: capacity,
            students: [],
            studentsCount: 0
        }
        storedInformation.push(obj)
       
        
    }
        

}
for (const element of arr) {
    if (element.includes('with email')){
        
        let info = element.split(` `)
        let student = info[0];
        let email = info[3];
        let course = info[5];
    
        let [studentName, credits] = student.split('[');
        credits = credits.split(`]`)[0]
        credits = Number(credits)
    
       let ifExist = storedInformation.find(x => x.Course === course)
    
       if (ifExist && ifExist.capacity > 0){
            ifExist.students.push({name: studentName, credits: credits, email: email})
            ifExist.capacity--
            ifExist.studentsCount++
       }
}

}

storedInformation.sort((a,b) => b.studentsCount - a.studentsCount)
storedInformation.forEach(course => {
    course.students.sort((a,b) => b.credits - a.credits)
});


for (const course of storedInformation) {
  console.log(`${course.Course}: ${course.capacity} places left`);

  for (const student of course.students) {

    console.log(`--- ${student.credits}: ${student.name}, ${student.email}`);
    
  }
  
}

}
solve(['JavaBasics: 2', 'user1[25] with email user1@user.com joins C#Basics', 'C#Advanced: 3', 'JSCore: 4', 'user2[30] with email user2@user.com joins C#Basics', 'user13[50] with email user13@user.com joins JSCore', 'user1[25] with email user1@user.com joins JSCore', 'user8[18] with email user8@user.com joins C#Advanced', 'user6[85] with email user6@user.com joins JSCore', 'JSCore: 2', 'user11[3] with email user11@user.com joins JavaBasics', 'user45[105] with email user45@user.com joins JSCore', 'user007[20] with email user007@user.com joins JSCore', 'user700[29] with email user700@user.com joins JSCore', 
    'user900[88] with email user900@user.com joins JSCore']
    
    )