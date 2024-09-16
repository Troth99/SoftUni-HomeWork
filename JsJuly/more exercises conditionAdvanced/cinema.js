function cinema(input){

    let typeProject = input[0];
    let lines = Number(input[1]);
    let colums = Number(input[2]);

    let price = 0;

    switch (typeProject) {

        case "Premiere": price = lines * colums * 12.00; break;
        case 'Normal' : price = lines * colums * 7.50; break;
        case 'Discount': price = lines * colums * 5.00; break;
    }

    console.log(price.toFixed(2))


}

cinema(["Premiere" , "10" , "12"])