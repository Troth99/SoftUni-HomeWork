function wedding (input){

    let manClients = Number(input[0])
    let womenClients = Number(input[1])
    let tableCount = Number(input[2])

    let buffer = ``

    for (let i = 1; i <= manClients; i++){
        for (let j = 1; j <= womenClients; j++){
            
            if (tableCount === 0){
                break;
            }
            tableCount--
            buffer += `(${i} <-> ${j}) `
        }
    }


console.log(buffer);

}


wedding([`2`,`2`,`3`])