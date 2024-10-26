function solve(digit){

let num = 0
let stringNumber = String(digit)
let lastDigit = ``
while (num < stringNumber.length){
    let everyNumb = Number(stringNumber.charAt(num))

    lastDigit = everyNumb
    

   
    num ++
    
}
let toEnglish = ``
switch(lastDigit){
    case 0: toEnglish = `zero`;break;
    case 1: toEnglish =`one`;break;
    case 2: toEnglish =`two`;break;
    case 3: toEnglish =`three`;break;
    case 4: toEnglish =`four`;break;
    case 5: toEnglish =`five`;break;
    case 6: toEnglish =`six`;break;
    case 7: toEnglish =`seven`;break;
    case 8: toEnglish =`eigth`;break;
    case 9: toEnglish =`nine`;break;
  
    
}
console.log(toEnglish);


}


solve(54554)