function specialNumbers(n) {

    let str = ``

    for (let i = 1; i <= 9; i++) {
        if (n % i === 0) {

            for (let j = 1; j <= 9; j++) {
                if (n % j === 0) {

                    for (let k = 1; k <= 9; k++) {
                        if (n % k === 0) {

                            for (let m = 1; m <= 9; m++) {
                                if (n % m === 0) {

                                    str += `${i}${j}${k}${m} `
                                    

                                }
                            }
                        }
                    }
                }
            }
        }

    }




    console.log(str);
}


specialNumbers(66)