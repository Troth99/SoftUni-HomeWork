function cinemaVoucer(input) {

    let index = 0
    let vaucher = Number(input[index++])

    let currentIndex = input[index]
    let total = 0
    let moviesCount = 0
    let eatCount = 0
   while (currentIndex !== `End`) {

        currentIndex = input[index]

        if (currentIndex === `End`) {
            break;
        }


        if (currentIndex.length > 8){
            let ascll0 = currentIndex.charCodeAt(0);
            let ascll1 = currentIndex.charCodeAt(1);
            total = ascll0 + ascll1
            if(vaucher > total){
            vaucher -= total
            moviesCount++

            }
            else {
                break;
            }
        }   else if (currentIndex.length < 8) {
            let notTicketAscll = currentIndex.charCodeAt(0)
            total = notTicketAscll
            if (vaucher > total){
                vaucher -= notTicketAscll
                eatCount++

            }
                else {
                    break;
                }
            }
            index++
    }
    console.log(moviesCount);
    console.log(eatCount);
    
    

}
cinemaVoucer(["1500",
    "Avengers: Endgame",
    "Bohemian Rhapsody",
    "Deadpool 2",
    "End"])
    
