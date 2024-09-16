function movieNight(input){

    let index = 0
    let movie = input[index]

    
    let currentMoviePoints = 0
    let currentMovie1 = ``
    let movieCount = 0
    
   

    while (index < input.length){

        if (movieCount > 7){
            break;
        }
        if (movie === `STOP`){
            break;
        }
        let currentMovie = input[index]
        let ascIISum = 0
        let length = currentMovie.length
    
       

        for (let i = 0; i < length; i++){

            let charCode = currentMovie.charCodeAt(i)
  
            
            if (charCode >= 65 && charCode <=90){
               ascIISum -= currentMovie.length
                
            }
            if (charCode>= 97 && charCode <= 122){
                ascIISum -= 2 * currentMovie.length
                
            }
            ascIISum += currentMovie.charCodeAt(i)
        }
 
        if (currentMoviePoints < ascIISum){
            currentMoviePoints = ascIISum
            currentMovie1 = currentMovie
        }
        movieCount++
        index++
        movie = input[index]
 }

 if (movie === `STOP`){
    console.log(`The best movie for you is ${currentMovie1} with ${currentMoviePoints} ASCII sum.`);
}else {
    console.log(`The limit is reached.`);
    console.log(`The best movie for you is ${currentMovie1} with ${currentMoviePoints} ASCII sum.`);
    
    
}

}


movieNight([
    "Breaking bad",

    "STOP"])
    
    
    