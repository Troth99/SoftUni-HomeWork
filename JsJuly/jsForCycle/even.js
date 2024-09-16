function forLoop(input){

    let number = Number(input[0]);

    for (let a = 0; a<=number; a+=2){

    console.log(Math.pow(2,a));
    }
}

forLoop(['10'])