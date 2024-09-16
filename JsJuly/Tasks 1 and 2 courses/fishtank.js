function fishTank(input){

    let length = Number(input[0]);
    let width = Number(input[1]) ;
    let hieght = Number(input[2]);
    let percentage = Number(input[3]) / 100;

    let volume = length * width * hieght;
    let litters = volume / 1000;

    let result = litters - litters * percentage;

    console.log(`Необходимите литри вода които ще събира аквариума са ${result}.`);
    


}

fishTank(["85","75","47","17"])