function lockedOor(input) {

    let first = Number(input[0])
    let second = Number(input[1])
    let third = Number(input[2])



    for (let i = 2; i <= first; i++) {
        let str = ``
        if (i % 2 === 0) {
            for (let k = 2; k <= second; k++) {
                if (k === 2 || k === 3 || k === 5 || k === 7) {
                    for (let b = 1; b <= third; b++) {

                        if (b % 2 === 0) {
                            str = `${i} ${k} ${b}`
                            console.log(str);
                            continue
                        }
                    }


                }

            }
        }

    }
}

        lockedOor([`8`, `2`, `8`])