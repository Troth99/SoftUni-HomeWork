function solve(arr){


function sortingByLenght(a , b){

 
    let firstCriteria = a.length - b.length

    if(firstCriteria !== 0){
        return firstCriteria
    }else {
        return a.toUpperCase().localeCompare(b.toUpperCase())
    }
    
}

   let sortedArray = arr.sort(sortingByLenght)

   console.log(sortedArray.join(`\n`));
   
}


//solve(['alpha', 'beta', 'gamma'])

solve(['Isaccc', 'Theodor', 'Jack', 'Harrison', 'George'])