
const firstNameEl = document.querySelector('input[name="firstName"]')
const lastNameEL = document.querySelector('input[name="lastName"]')
const facultyNumberEl = document.querySelector('input[name="facultyNumber"]')
const gradeEl = document.querySelector('input[name="grade"]')

const tbodyEl = document.querySelector('#results tbody')


const baseUrl = 'http://localhost:3030/jsonstore/collections/students'

async function loadTable(e){
    tbodyEl.innerHTML = ''

    try {
        const response = await fetch(baseUrl)
        
        const data = await response.json()
        const dataValues = Object.values(data)
        
        if(!response.ok){
           throw new Error('Failed to fetch students')
        }
     
   
        for (const student of dataValues) {
            
          
            const trEl = document.createElement('tr');

            trEl.innerHTML = `
                <td>${student.firstName}</td>
                <td>${student.lastName}</td>
                <td>${student.facultyNumber}</td>
                <td>${student.grade}</td>
            `;

            tbodyEl.appendChild(trEl);
        }
        
    } catch (error) {
        console.log(error)
    }
    
    
}

const submitBtn = document.getElementById('form');


submitBtn.addEventListener('submit', submitHandler)

async function submitHandler(e){
    e.preventDefault()

    const form = new FormData(e.target);

    const newStudent = {

        firstName: form.get('firstName'),
        lastName: form.get('lastName'),
        facultyNumber: form.get('facultyNumber'),
        grade: form.get('grade')

    }
    
    if(typeof newStudent.firstName !== 'string' || newStudent.firstName === '' 
        && typeof newStudent.lastName !== 'string' || newStudent.lastName === '' 
        && typeof newStudent.facultyNumber !== 'string' || newStudent.facultyNumber === '' 
    ){
        return
    }

    if(newStudent.grade === null || isNaN(newStudent.grade)){
        retrun
    }

    try {
        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(newStudent)
        })

        const data = await response.json()
        firstNameEl.value = ''
        lastNameEL.value = ''
        facultyNumberEl.value = ''
        gradeEl.value = ''
        loadTable()
    } catch (error) {
       console.log(error) 
    }

}

loadTable()
