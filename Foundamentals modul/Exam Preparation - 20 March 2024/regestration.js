function regestration(input, command) {

    let index = 0

   
    let lowerOrUppserUsernameChange = ``
   
    let splittedIndex = command.split(` `)

    let mainCommand = splittedIndex[index]
    let originalName = input

    while (mainCommand !== `Registration`) {


        let currentIndex = mainCommand


        if (currentIndex === `Letters`) {


            currentIndex = splittedIndex[++index]
            if (currentIndex === `Lower`) {

                lowerOrUppserUsernameChange = originalName.toLowerCase()
                console.log(lowerOrUppserUsernameChange);
            }
        } else if (currentIndex === `Upper`) {
            lowerOrUppserUsernameChange = originalName.toUpperCase()
            console.log(lowerOrUppserUsernameChange);
        }

        if (currentIndex === `Substring`) {

            currentIndex = splittedIndex[++index]

            if (originalName.includes(currentIndex)) {

                let result = originalName.replace(currentIndex, ``)
                console.log(result);
                
                

            } else {
                console.log(`The username ${originalName} doesn't contain ${currentIndex}.`);

            }

        }
        if (currentIndex === `Replace`) {
            currentIndex = splittedIndex[++index]

            originalName = originalName.replaceAll(currentIndex, `-`)
            console.log(originalName);
            

        }

        if (currentIndex === `IsValid`) {
            currentIndex = splittedIndex[++index]

            if (originalName.includes(currentIndex)) {
                console.log(`Valid username.`);

            } else {
                console.log(`${currentIndex} must be contained in your username.`);

            }
        }

        if (currentIndex === `Reverse`) {

            mainCommand = splittedIndex[++index]

            let startIndex = Number(mainCommand)

            mainCommand = splittedIndex[++index]

            let endIndex = Number(mainCommand)

            if (startIndex >= 0 && endIndex < originalName.length && startIndex <= endIndex) {

                let substring = originalName.slice(startIndex, endIndex + 1);
                let reversed = substring.split('').reverse().join('');
                console.log(reversed);
                continue



            } else {
                console.log(`Invalid indices`);

            }

        }



        mainCommand = splittedIndex[++index]

    }






}

//regestration(`John Letters Lower Substring SA IsValid @ Registration`)
regestration(`ThisIsSoftUni`, `Reverse 1 3 Replace S Substring hi Registration`)