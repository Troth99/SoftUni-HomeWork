function vacantionBooks(input){
    let pageCount = Number(input[0]);
    let pagePerHour = Number(input[1]);
    let countDays = Number(input[2]);

    let totalTime = pageCount / pagePerHour;
    let result = totalTime / countDays;

    console.log(result);


}

vacantionBooks(["212","20","2"])