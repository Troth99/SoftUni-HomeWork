function boooking(input){

    let favBook = input[0]
    let index = 1
    let currentBook = input[index]
    let bookIsFound = false;



    while(currentBook !== 'No More Books'){

          
            if (currentBook === favBook){
                bookIsFound = true;
                break;
            }
            index++
            currentBook = input[index]
            
    }
    if (bookIsFound){
        console.log(`You checked ${index -1} books and found it.`);
        
    }else {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${index - 1} books.`);
        
        
    }

}

 /*boooking(["The Spot",
    "Hunger Games",
    "Harry Potter",
    "Torronto",
    "Spotify",
    "No More Books"])*/

    boooking(["Troy",
        "Stronger",
        "Life Style",
        "Troy"])
        
    