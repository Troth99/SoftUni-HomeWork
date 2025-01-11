function solve(word1, word2, word3){

    let sumLenght = 0;
    let averageLenght = 0;


    let firstLenght = word1.length;
    let secondLength = word2.length;
    let thirdLength = word3.length;

    sumLenght = firstLenght + secondLength + thirdLength
    averageLenght = Math.floor(sumLenght / 3);

    console.log(sumLenght);
    console.log(averageLenght);
    
    

}

solve('chocolate', 'ice cream', 'cake')