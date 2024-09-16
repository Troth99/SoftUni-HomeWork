function EqualPairs(input){

    let index = 0;
    let sum = Number(input[index]);
    index++

    let firstSum = 0
    let secondSum = 0
    let diff = 0
    for (let i = 0; i < sum; i++){

        let num1 = Number(input[index]);
        index++
        let num2 = Number(input[index])
        index++

        if (i % 2 != 0){
            firstSum = num1 + num2
        }else {
            secondSum = num1 + num2
        }
    }

    diff = Math.abs(firstSum - secondSum)

    if(firstSum === secondSum || sum < 2){
        console.log(`Yes, value=${secondSum}`);
    }else {
        console.log(`No, maxdiff=${diff}`);
    }
}
EqualPairs([`3`,`1`,`2`,`0`,`3`,`4`,`-1`])
//EqualPairs([`1`,`5`,`5`])