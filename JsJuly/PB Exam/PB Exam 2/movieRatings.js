function movieRatings(input){

    let index = 0;
    let NumberOfFilms = Number(input[index]);
    index++

    let maxRateMovie = ''
    let maxRate = Number.NEGATIVE_INFINITY
    let minRateMovie = ''
    let minRate = Number.POSITIVE_INFINITY
    let totalRate = 0;

    for (i = 0; i < NumberOfFilms; i++){

        let currentMovie = input[index];
        index ++
        let movieRating = Number(input[index])
        index++

        if (movieRating > maxRate){
            maxRate = movieRating
            maxRateMovie = currentMovie
        }else if (movieRating < minRate){
            minRate = movieRating
            minRateMovie = currentMovie
        }

        totalRate += movieRating

       
    }

    let averageRate = totalRate / NumberOfFilms

    console.log(`${maxRateMovie} is with highest rating: ${maxRate.toFixed(1)}`);
    console.log(`${minRateMovie} is with lowest rating: ${minRate.toFixed(1)}`);
    console.log(`Average rating: ${averageRate.toFixed(1)}`);
}

movieRatings(["5",
    "A Star is Born",
    "7.8",
    "Creed 2",
    "7.3",
    "Mary Poppins",
    "7.2",
    "Vice",
    "7.2",
    "Captain Marvel",
    "7.1"])
    