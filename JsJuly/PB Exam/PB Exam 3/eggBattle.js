function eggsBattle(input){

let index = 0;
let playerOneEggs = Number(input[index]);
index++
let playerTwoEggs = Number(input[index])
index++



for (let i = 0; i < input.length; i++){

    let currentInput = input[index]
    index++
 

    if (currentInput === `one`){
        playerTwoEggs--
    }else if (currentInput === `two`){
        playerOneEggs--
    }

    let command = input[index]

    if (command === `End`){
        console.log(`Player one has ${playerOneEggs} eggs left.`);
        console.log(`Player two has ${playerTwoEggs} eggs left.`);
        break;
    }
}
if (playerOneEggs ===0){
    console.log(`Player one is out of eggs. Player two has ${playerTwoEggs} eggs left.`);
}else if (playerTwoEggs ===0){
    console.log(`Player two is out of eggs. Player one has ${playerOneEggs} eggs left.`);
}


}
eggsBattle([`2`,`6`,`one`,`two`,`two`])