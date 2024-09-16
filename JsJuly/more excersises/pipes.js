function pipes(input){

    let v = Number(input[0]);
    let pipe1 = Number(input[1]);
    let pipe2 = Number(input[2]);
    let hours = Number(input[3]);

    let pipe1Sum = pipe1 * hours;
    let pipe2Sum = pipe2 * hours;

    let total= pipe1Sum + pipe2Sum;

    let percent = (total/v)*100;

    let pipe1Percent = (pipe1Sum / total)* 100;
    let pipe2Percent = (pipe2Sum / total) * 100;
    
    if (v >= total){
        console.log(`The pool is ${percent.toFixed(2)}% full. Pipe 1: ${pipe1Percent.toFixed(2)}%. Pipe 2: ${pipe2Percent.toFixed(2)}%.`);
    } else {
        let overflow = Math.abs(total-v);
        console.log(`For ${hours} hours the pool overflows with ${overflow.toFixed(2)} litters.`)
    }
    

}

pipes(["1000" , "100" , "120" , "3"])
pipes(["100", "100", "100" , "2.5"])