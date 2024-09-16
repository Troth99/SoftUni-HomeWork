function personalTitles(input){

    let age = Number(input[0]);
    let gender = input[1];

    if (gender === 'm'){
        if (age < 16){
            console.log(`Master`);
        }else if ( age >= 16){
            console.log(`Mr.`);
        }
    }else if (gender === 'f'){
        if (age < 16){
            console.log('Miss');
        }else if ( age >= 16){
            console.log('Ms.');
    }

}
}
personalTitles(["18" , "m"])