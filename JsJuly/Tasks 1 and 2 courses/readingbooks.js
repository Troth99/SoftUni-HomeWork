function readingbooks(input){

    let pageNumber = Number(input[0]);
    let pages = Number(input[1]);
    let numberOfDays = Number(input[2]);
    let totalHours = pageNumber / pages;
    let hoursPerDay = totalHours / numberOfDays;

    console.log (`На Жоро ще са му нужни ${hoursPerDay} часа на ден.`)



}

readingbooks(["212" , "20" , "2"])