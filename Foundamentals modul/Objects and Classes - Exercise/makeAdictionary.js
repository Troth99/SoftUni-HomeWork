function dictionary(arr){

    let dictionary = {}

    for (let element of arr){
        
        let parsed = JSON.parse(element)
        
       let term = Object.keys(parsed)[0]
       let defenition = parsed[term]

       dictionary[term] = defenition

        if (defenition.hasOwnProperty(term)){
            dictionary[term] = defenition
        }

    }

   let sorted = Object.keys(dictionary).sort((firstElement, secondElement) => firstElement.localeCompare(secondElement))

   for (let key of sorted){

    console.log(`Term: ${key} => Definition: ${dictionary[key]}`);
    
   }
}

dictionary([
    '{"Cup":"A small bowl-shaped container for drinking from, typically having a handle"}',
    '{"Cake":"An item of soft sweet food made from a mixture of flour, fat, eggs, sugar, and other ingredients, baked and sometimes iced or decorated."} ',
    '{"Watermelon":"The large fruit of a plant of the gourd family, with smooth green skin, red pulp, and watery juice."} ',
    '{"Music":"Vocal or instrumental sounds (or both) combined in such a way as to produce beauty of form, harmony, and expression of emotion."} ',
    '{"Art":"The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power."} '
    ]
    
    )