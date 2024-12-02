function solve(arr){

    let patternt = /(?<DelimiterStart>\*+|\^+)(?<Artifact>[A-Za-z ]{6,})(?<DelimiterEnd>\*+|\^+)[^A-Za-z0-9]*\++(?<Coordinates>-?\d+(\.\d+)?,-?\d+(\.\d+)?)(?:\+)/g

    let exec = patternt.exec(arr)
    let itemsFound = []
    while (exec){
        let artifactName = exec.groups.Artifact
        let cords = exec.groups.Coordinates

        let obj = {
            name: artifactName,
            cords: cords,
        }
        itemsFound.push(obj)

        exec = patternt.exec(arr)

}

if (itemsFound.length > 0){
   itemsFound.forEach(element => {
    console.log(`Found ${element.name} at coordinates ${element.cords}.`);
   });

}else {
        console.log(`No valid artifacts found.`);
}

}

solve(['*Lost Crown*+++34.807,-40.479+++^Ancient Sword^++++48.8566,2.3522++++*Golden Statue*!!!+12.492,99.901+']);