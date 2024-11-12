function extractFile(text){

let fileInfo = text.split(`\\`)

let file = fileInfo.pop()
let fileInformation = file.split(`.`)
let extension = fileInformation.pop()

console.log(`File name: ${fileInformation.join(`.`)}`);
console.log(`File extension: ${extension}`);






}


extractFile('C:\\Projects\\Data-Structures\\LinkedList.bat.cs')