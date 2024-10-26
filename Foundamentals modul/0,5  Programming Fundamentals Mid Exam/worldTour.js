function solve(arr) {

    let travellingDestinations = arr.shift().split(``)

    let command = arr.shift()
    while (command !== `Travel`) {

        let cmdInfo = command.split(`:`)

        let action = cmdInfo[0]

        if (action === `Add Stop`) {

            let index = Number(cmdInfo[1])
            let str = cmdInfo[2]

            if (index >= 0 && index <= travellingDestinations.length -1) {

                travellingDestinations.splice(index, 0, ...str.split(``));
               
            }
            console.log(travellingDestinations.join(``));

        }else if (action === `Remove Stop`){

            let startIndex = Number(cmdInfo[1])
            let endIndex = Number(cmdInfo[2])

            if (startIndex >= 0 && endIndex >= 0 && startIndex < travellingDestinations.length && endIndex < travellingDestinations.length){
               
            let deleteCount = endIndex - startIndex + 1
             travellingDestinations.splice(startIndex, deleteCount)

          
               
            }
            console.log(travellingDestinations.join(``));
        }else if (action === `Switch`){

            let oldString = cmdInfo[1]
            let newString = cmdInfo[2]
        
            let destinationsStr = travellingDestinations.join(``);

            if (destinationsStr.includes(oldString)){
        
                destinationsStr = destinationsStr.split(oldString).join(newString);
                travellingDestinations = destinationsStr.split(``)
      }

            console.log(travellingDestinations.join(``));
        }


        command = arr.shift()
    }

    console.log(`Ready for world tour! Planned stops: ${travellingDestinations.join(``)}`);
    

}


/*AlbNigeriaania:Bulgaria:Cyprus:Deuchland
AlbNaania:Bulgaria:Cyprus:Deuchland
AlbNaania:Bulgaria:Cyprus:Deuchland
Ready for world tour! Planned stops: AlbNaania:Bulgaria:Cyprus:Deuchland
*/
console.log(`----------`);

solve(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"])

    /*Hawai::RomeCyprys-Greece
Hawai::Rome-Greece
Bulgaria::Rome-Greece
Ready for world tour! Planned stops: Bulgaria::Rome-Greece
*/
    
