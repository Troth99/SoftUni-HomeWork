function solve(arr, number){

let arr3 = []
for (let i = 0; i < arr.length; i++){
    let result = 0
    let curretElement = arr[i]

    for (let j = i+ 1; j < arr.length; j++){

        let secondElemednt = arr[j]

        result = curretElement + secondElemednt

        if (result === number){
            arr3 = `${curretElement}` +` ${secondElemednt}`
            console.log(arr3);
        }
    }
}





}


solve([14, 20, 60, 13, 7, 19, 8],
    27
)