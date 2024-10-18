function solve(arr) {
    let targetSequence = arr.shift().split(' ').map(Number);
    let shotCounter = 0;

    for (let command of arr) {
        if (command === 'End') {
            console.log(`Shot targets: ${shotCounter} -> ${targetSequence.join(' ')}`);
            break;
        }

        let index = Number(command);


        if (index >= 0 && index < targetSequence.length && targetSequence[index] !== -1) {
            let shotValue = targetSequence[index];
            targetSequence[index] = -1;
            shotCounter++;


            for (let i = 0; i < targetSequence.length; i++) {

                if (targetSequence[i] !== -1) {
                    if (targetSequence[i] > shotValue) {
                        targetSequence[i] -= shotValue;
                    } else {
                        targetSequence[i] += shotValue;
                    }
                }
            }
        }
    }
}



solve(["30 30 12 60 54 66",
    "5",
    "2",
    "4",
    "0",
    "End"])

