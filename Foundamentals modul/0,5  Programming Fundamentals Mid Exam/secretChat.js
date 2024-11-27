function secretChat(arr){
function insertSpace(concealedMsg, index){
    let spllited = concealedMsg.split(``);
    spllited.splice(index, 0, ` `);
    return spllited.join(``) ;
}
function reverse(concealedMsg, substring){
let startIndex = concealedMsg.indexOf(substring)
let reversedSubstring = concealedMsg.slice(startIndex , startIndex + substring.length)
let reversed = reversedSubstring.split(``).reverse().join(``)
let updatedMsg = concealedMsg.slice(0 ,startIndex) + concealedMsg.slice(startIndex + substring.length) 
return updatedMsg + reversed



}
function replaceFunction(concealedMsg, substring, replacement){
    concealedMsg = concealedMsg.split(substring).join(replacement)
    return concealedMsg
}
let concealedMsg = arr.shift();

let command = arr.shift();

while (command !== `Reveal`){

    let tokens = command.split(`:|:`)
    let action = tokens.shift().toLowerCase()

    if (action === `insertspace`){
        let index = Number(tokens[0]);
        concealedMsg = insertSpace(concealedMsg, index);
        console.log(concealedMsg);
    }else if (action === `reverse`){
        let substring = tokens[0];
        if(concealedMsg.includes(substring)){
        concealedMsg = reverse(concealedMsg, substring);
        console.log(concealedMsg);
        }else {
            console.log(`error`);
            
        }
       
        
    }else if (action === `changeall`){
        let substring = tokens[0]
        let replacement = tokens[1]
        concealedMsg = replaceFunction(concealedMsg, substring, replacement)
        console.log(concealedMsg);
        
    }



    command = arr.shift()
}

console.log(`You have a new text message: ${concealedMsg}`);

}

/*secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
  ]
  )*/

 secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ]
  )