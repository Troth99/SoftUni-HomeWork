function solve(string1, string2) {

    let sum1 = 0
    let sum2 = 0

    for (let i = 0; i < string1.length; i++) {

        string1[i] = Number(string1[i])
        sum1 += string1[i]
    }

    for (let i = 0; i < string2.length; i++) {

        string2[i] = Number(string2[i])
        sum2 += string2[i]
    }
    let areEqual = true

    for (let i = 0; i < string1.length; i++) {

        if (string1[i] !== string2[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            areEqual = false
            break;
        }


    }

    if (areEqual) {
        console.log(`Arrays are identical. Sum: ${sum1}`);

    }
}


solve(['10', '20', '30'], ['10', '20', '30'])