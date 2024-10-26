function pwReset(arr) {

    let password = arr.shift()

    let cmd = arr.shift()

    
    while (cmd !== `Done`) {

        let cmdInfo = cmd.split(` `)
        let action = cmdInfo[0].toLowerCase()

        if (action === `takeodd`) {

            let spllitedPw = password.split(``)
            for (let i = 0; i <= spllitedPw.length; i++) {

                if (i % 2 !== 0 - 1) {
                    spllitedPw.splice(i, 1)
                }


            }
            password = spllitedPw.join(``)
            console.log(password);
            

        }else if (action === `cut`){

            let index = Number(cmdInfo[1])
            let length = Number(cmdInfo[2])

            let spllitedPw = password.split(``)

            spllitedPw.splice(index, length)
            password = spllitedPw.join(``)
            console.log(password);
            
        }else if (action === `substitute`){

            
            let substring = cmdInfo[1]
            let substitute = cmdInfo[2]

            if (password.includes(substring)){
                
               
               let replaced = password.split(substring).join(substitute)
                
               password = replaced
            
                console.log(password);
                       
                
            }else {
                console.log(`Nothing to replace!`);
                
            }
        }

        cmd = arr.shift()
    }


console.log(`Your password is: ${password}`);


}


pwReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"])
    