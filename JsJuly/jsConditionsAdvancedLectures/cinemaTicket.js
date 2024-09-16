function cinemaTicket(input) {
    let dayOfWeek = input[0];
    let cinemaTicket = 0;

    switch (dayOfWeek) {
        case 'Monday':
        case 'Tuesday':
        case 'Friday': cinemaTicket = 12; 
            break;
        case 'Wednesday':  
        case 'Thursday':  cinemaTicket = 14; 
            break;
        case 'Saturday':
        case 'Sunday': cinemaTicket = 16; 
            break;
    
      }  console.log(cinemaTicket);
}
cinemaTicket(["Sunday"])
