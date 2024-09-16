function solve(roundNum, parseNum){

 if (parseNum > 15){
    parseNum = 15
 }

 let round = roundNum.toFixed(parseNum)
 let trimed = parseFloat(round)
 console.log(trimed);
 
 }


solve(10.5,3)