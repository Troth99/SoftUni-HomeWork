function sortNums(a, b, c){
 
    let array = [a, b, c];
    array.sort((x, y) => y-x);
    for(let i = 0; i < array.length; i++){
        console.log(array[i]);
    }
}
sortNums(2, 1, 3);