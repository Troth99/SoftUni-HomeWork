function solve(arr){

    let wordsInfor = arr[0].split(` | `);
    let testedWords = arr[1].split(` | `);

    let commandToDo = arr[2].toLowerCase();

    let dictionarry = []

for (let info of wordsInfor){
   let [word, definition] = info.split(`: `);

   let obj = {
    word: word,
    definition: [definition],
   };

   let objFind = dictionarry.find(x => x.word === word)

   if (objFind){
    objFind.definition.push(definition)
   }else {
    dictionarry.push(obj)
   }
 
    
}

if (commandToDo === `hand over`){
   let printWords = []
   dictionarry.forEach(element => {
        printWords.push(element.word)
   });
   console.log(printWords.join(` `));   
}else if (commandToDo === `test`){

    for (let teacherWord of testedWords){


       let obj = dictionarry.find(x => x.word === teacherWord);
       if (obj){
        let values = Object.values(obj)[1]
        console.log(`${obj.word}:`);
        for (let i = 0; i < values.length; i++) {
            let defition = values[i]
            console.log(` -${defition}`);  
        }
       }
    }
}



}


solve(["care: worry, anxiety, or concern | care: a state of mind in which one is troubled | face: the front part of the head, from the forehead to the chin",
    "care | kitchen | flower",
    "Test"])
    
    

