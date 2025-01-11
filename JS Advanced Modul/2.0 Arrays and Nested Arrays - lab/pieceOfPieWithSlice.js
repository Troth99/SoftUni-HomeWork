function pieceOfPie(arr, startFlavour, endFlavour){

let startIndex = arr.indexOf(startFlavour);
let endIndex = arr.indexOf(endFlavour);

return arr.slice(startIndex, endIndex + 1)


}

console.log(pieceOfPie(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
   'Key Lime Pie',
   'Lemon Meringue Pie'
   ));
