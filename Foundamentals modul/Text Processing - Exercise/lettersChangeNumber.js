function lettersChangeNumbers(text){

let result = 0
let letterInfo = text.split(` `).filter(word => word !== ``)

 for (let info of letterInfo){

   let infoSplited = info.split(``)
   let firstLetter = infoSplited.shift()
   let lastLetter = infoSplited.pop()
   infoSplited = Number(infoSplited.join(``))

  if (firstLetter === firstLetter.toUpperCase()){
    let code = firstLetter.charCodeAt(0)
    let numberInAlphabet = code - `A`.charCodeAt(0) + 1
    
    let action = infoSplited / numberInAlphabet
    result += action
  }
  if (firstLetter === firstLetter.toLowerCase()){
    let code = firstLetter.charCodeAt(0)
    let numberInAlphabet = code - `a`.charCodeAt(0) + 1

    let action = infoSplited * numberInAlphabet
    result += action
    
    
  }if (lastLetter === lastLetter.toUpperCase()){
    let code = lastLetter.charCodeAt(0)
    let numberInAlphabet = code - `A`.charCodeAt(0) + 1

    result -=numberInAlphabet

  }
  if (lastLetter === lastLetter.toLowerCase()){
    let code = lastLetter.charCodeAt(0)
    let numberInAlphabet = code - `a`.charCodeAt(0) + 1

    result += numberInAlphabet
  }
   
 }

 
console.log(result.toFixed(2));


}

lettersChangeNumbers('P34562Z q2576f   H456z')