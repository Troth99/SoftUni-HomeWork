function monets(input){

    let currentElement = Math.floor(Number(input[0]) * 100)



    let monetsCount = 0

    while (currentElement > 0){

        if (currentElement >= 200){
            currentElement -= 200
            monetsCount++
        }else if (currentElement >= 100){
            currentElement -= 100
            monetsCount++
        }else if (currentElement >= 50){
            currentElement -= 50
            monetsCount++
        }else if (currentElement >= 20){
            currentElement -=20;
            monetsCount++
        }else if (currentElement >= 10){
            currentElement -= 10;
            monetsCount++
        }else if (currentElement >=5){
            currentElement -= 5
            monetsCount++
        }else if (currentElement >= 2){
            currentElement -= 2
            monetsCount++
        }else if (currentElement > 0){
            currentElement -=1
            monetsCount++
        }
    }
   
    
    console.log(monetsCount);
    




}

monets(["2.73"])