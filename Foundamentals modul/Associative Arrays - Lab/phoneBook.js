function phoneBook(arr){


    let phoneBook = {};

    for (let element of arr){

        let personArguments = element.split(` `);

        let personName = personArguments[0];
        let personPhone = personArguments[1]

        phoneBook[personName] = personPhone
    }

    for (let key in phoneBook){

        let value = phoneBook[key]
        console.log(`${key} -> ${value}`);
        
    }    

}

phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
   )