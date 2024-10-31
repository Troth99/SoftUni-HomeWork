function adressBook(arr){

let personObj = {}

for (let elemnt of arr){
    
    let [name, adress] = elemnt.split(`:`)
   
    personObj[name] = adress

    
}

//When we need to sort by key -> easier approach to order only the keys.
//When we need to sort by key -> easier approach to order only the keys.
//When we need to sort by key -> easier approach to order only the keys.

let sorted = Object.keys(personObj).sort((a , b) => a.localeCompare(b))

for (let key of sorted){
    console.log(`${key} -> ${personObj[key]} `);
    
}

}

adressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
   )