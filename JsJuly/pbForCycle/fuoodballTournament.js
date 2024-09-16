function foodballTournamnet(input) {

    let index = 0;
    let stadiumCapacitate = Number(input[index]);
    index++
    let numberOfAllFans = Number(input[index]);
    index++

    let A = 0;
    let B = 0;
    let V = 0;
    let G = 0;


    for (let fans = 0; fans < numberOfAllFans; fans++) {

        let currentGroup = input[index]
        index++

        switch (currentGroup) {
            case 'A':
                A++
                break;
            case 'B':
                B++
                break;
            case 'V':
                V++
                break;
            case 'G':
                G++
                break;
        }
    }

    let percentageA = A / numberOfAllFans * 100
    let percentageB = B / numberOfAllFans * 100;
    let percentageV = V / numberOfAllFans * 100;
    let percentageG = G / numberOfAllFans * 100;

    let percentageTotalFans = numberOfAllFans / stadiumCapacitate * 100;

    console.log(percentageA.toFixed(2) + `%`);
    console.log(percentageB.toFixed(2) + `%`);
    console.log(percentageV.toFixed(2) + `%`);
    console.log(percentageG.toFixed(2) + `%`);
    console.log(percentageTotalFans.toFixed(2) + `%`);



}

foodballTournamnet([`76`, `10`, `A`, `V`, `V`, `V`, `G`, `B`, `A`, `V`, `B`, `B`])