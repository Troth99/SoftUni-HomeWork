function activationKey(arr) {

    let ourActivationKey = arr.shift()

    let command = arr.shift()

    while (command !== `Generate`) {

        let cmdInfo = command.split(`>>>`)
        let action = cmdInfo.shift().toLowerCase()

        if (action === `slice`) {

            let startIndex = Number(cmdInfo[0])
            let endIndex = Number(cmdInfo[1])


            ourActivationKey = ourActivationKey.split(``)
            ourActivationKey.splice(startIndex, endIndex - startIndex)
            ourActivationKey = ourActivationKey.join(``)

            console.log(ourActivationKey);
            
        } else if (action === `flip`) {

            let caseAction = cmdInfo[0]
            let startIndex = Number(cmdInfo[1])
            let endIndex = Number(cmdInfo[2])

            if (caseAction === `Upper`) {
                ourActivationKey = ourActivationKey.split(``)
                let cases = ourActivationKey.slice(startIndex, endIndex)
                cases = cases.join(``)
                let upper = cases.toUpperCase()
                ourActivationKey = ourActivationKey.join(``)
                let finalResult = ourActivationKey.split(cases).join(upper)
                ourActivationKey = finalResult

              }else if (caseAction === `Lower`){
                ourActivationKey = ourActivationKey.split(``)
                let cases = ourActivationKey.slice(startIndex, endIndex)
                cases = cases.join(``)
                let upper = cases.toLowerCase()
                ourActivationKey = ourActivationKey.join(``)
                let finalResult = ourActivationKey.split(cases).join(upper)
                ourActivationKey = finalResult
              }
              console.log(ourActivationKey);
              
        }else if (action === `contains`){
            let substring = cmdInfo[0]
            
            if (ourActivationKey.includes(substring)){
                console.log(`${ourActivationKey} contains ${substring}`);
                
            }else {
                console.log(`Substring not found!`);
                
            }
            
        }





        command = arr.shift()
    }


if (command === `Generate`){
    console.log(`Your activation key is: ${ourActivationKey}`);
    
}


}

activationKey(["134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"])
    
