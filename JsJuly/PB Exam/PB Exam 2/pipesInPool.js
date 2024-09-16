function pipeInPool(input){


    let v = Number(input[0]);
    let p1 = Number(input[1]);
    let p2 = Number(input[2]);
    let hours = Number(input[3]);

    let v1= hours *p1;
    let v2 = hours * p2;

    let sum = v1+v2;

    let percent = (sum / v) *100;

    let pipe1 = (v1/sum)  *100;
    let pipe2 = (v2/sum)  * 100;

        if (sum < v) {
            console.log(`The pool is ${percent.toFixed(2)}% full. Pipe 1 :${(pipe1.toFixed(2))}% . Pipe 2: ${(pipe2.toFixed(2))}%.`);
        }
        else {
            console.log(`For ${(hours . toFixed(2))} hours the pool overflows with ${((sum- v) .toFixed(2))} liters.`);
        }
    

}
pipeInPool(["1000" , "100" , "120" , "3"])
pipeInPool(["100", " 100" , "100", " 2.5"])