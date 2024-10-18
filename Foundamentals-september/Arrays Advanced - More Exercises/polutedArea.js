function polutedArea(mapInfo, array){

    function breeze(arr, index){
        for (let i = 0; i < arr.length; i++){
            let currentIndex = arr[index][i]
            if(currentIndex - 15 >= 0){
                arr[index][i] -= 15
            }else {
                arr[index][i] =0
            }
        }
        return arr
    }
    function gale(arr, index){
        for (let j = 0; j < arr.length; j++){
            let currentIndex = arr[j][index];
            if(currentIndex - 20 >= 0){
                arr[j][index] -= 20
            }else {
                arr[j][index] = 0
            }
        }
        return arr
    }
    function smog(arr, index){
        for (let i= 0; i< arr.length; i++){
            for (let j = 0; j< arr.length; j++){
                arr[i][j] += index
            }
        }
        return arr
    }
    let mapOfSofia = mapInfo.map(n => n.split(` `).map(Number))

    while(array.length > 0){
        let currentIndex = array.shift()
        let currentForce = currentIndex.split(` `)[0]
        let currentValue = +currentIndex.split(` `)[1]

        switch(currentForce){
            case `breeze`:
                mapOfSofia = breeze(mapOfSofia, currentValue); break;
            case `gale` :
                mapOfSofia = gale(mapOfSofia, currentValue); break;
            case `smog`:
                mapOfSofia = smog(mapOfSofia, currentValue); break;
            default: break;
        }


    }
    let result = `Polluted areas: `

    for (let rows = 0; rows < mapOfSofia.length; rows++){
        for (let col = 0; col < mapOfSofia.length; col++){
            let currentValue = mapOfSofia[rows][col]
            if (currentValue >= 50){
                result += `[${rows}-${col}], `
            }
        }
    }


console.log(result === `Polluted areas: ` ?result = `No polluted areas`: result.slice(0, -2));


}



polutedArea(['5 7 72 14 4',
    '41 35 37 27 33',
    '23 16 27 42 12',
    '2 20 28 39 14',
    '16 34 31 10 24'],
    ['breeze 1', 'gale 2', 'smog 25']
    )