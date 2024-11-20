function passwordReset(arr) {


    let password = arr.shift()

    let command = arr.shift()

   
    while (command !== `Done`) {

        let info = command.split(` `)
        let action = info[0].toLowerCase()

        if (action === `takeodd`) {
            let newRawPw = ``
        
            for (let i = 0; i < password.length; i++) {

                if (i % 2 !== 0) {
                    newRawPw += password[i]
                }
            }
            password = newRawPw
            console.log(password);

        }else if (action === `cut`) {
            let index = Number(info[1])
            let length = Number(info[2])

            let spllitedPw = password.split(``)

            spllitedPw.splice(index, length)
            password = spllitedPw.join(``)
            console.log(password);


        } if (action === `substitute`) {

            let substring = info[1];
            let substitute = info[2];

            if (password.includes(substring)) {


                let replace = password.split(substring).join(substitute)
                password = replace


                console.log(password);


            } else {
                console.log(`Nothing to replace!`);

            }

        }


        command = arr.shift()
    }

    console.log(`Your password is: ${password}`);

}


passwordReset((["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"])



)