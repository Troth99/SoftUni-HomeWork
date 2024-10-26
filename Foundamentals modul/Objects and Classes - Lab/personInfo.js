function personInfo(firstName, lastName, age){

    let personObj = {}
        personObj[`firstName`] = firstName;
        personObj[`lastName`] = lastName;
        personObj[`age`] = +age


        return personObj
    
}

let returnedObj = personInfo("Peter", 
"Pan",
"20"
)

console.log(returnedObj);
