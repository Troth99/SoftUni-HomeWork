function sortArray(arr, action){
    function ascOrder(arr){
        return arr.sort((a, b) => a - b);
    }
    function descOrder(arr){
        return arr.sort((a, b) => b -a);
    }
if (action === 'asc'){
    const sorted = ascOrder(arr);
    return sorted
}else if (action === 'desc'){
    const sorted = descOrder(arr);
    return sorted
}


}

console.log(sortArray([14, 7, 17, 6, 8], 'desc'))