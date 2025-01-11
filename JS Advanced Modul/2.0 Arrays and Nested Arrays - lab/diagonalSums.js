function diagonalSums(input){

let firstDiagonal = 0;
let secondDiagonal = 0;

for (let i = 0; i < input.length; i++){
    let element = input[i];

    for (let j = i; j < element.length; j++){

        if (firstDiagonal === 0){
            firstDiagonal = element[j];
            break;
        }else {
            firstDiagonal += element[j]
            break;
        }
        
    }
}


for (let i = 0; i < input.length; i++){
    let element = input[i]

    for (let j = i; j >= 0; j--){

    if (secondDiagonal === 0){
        secondDiagonal = element[element.length - 1];
        break;
    }else {
        secondDiagonal += element[element.length - 1 - i]
        break;
    }
}
}
console.log(firstDiagonal, secondDiagonal);



}


//diagonalSums([[20, 40], [10, 60]])
diagonalSums([[3, 5, 17],[-1, 7, 14],  [1, -8, 89]]  )