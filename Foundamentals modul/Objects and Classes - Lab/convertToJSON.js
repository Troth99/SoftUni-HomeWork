function solve(firstName, lastName, hairColor){

    let person = {}

    person[`name`] = firstName
    person[`lastName`] = lastName
    person[`hairColor`] = hairColor


    let JSONText = JSON.stringify(person)

    console.log(JSONText);
    

}


solve('George', 'Jones', 'Brown')