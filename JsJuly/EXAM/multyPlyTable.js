function multyplyTable(input){

    let multyply = input[0]

  

    for (let last = 1; last <= Number(multyply[2]); last++){
        for (let second = 1; second <= Number(multyply[1]); second++){
           for (let first = 1; first<= Number(multyply[0]);first++){
                let sum = last * second * first
                if (last && second && first >=0){
                    console.log(`${last} * ${second} * ${first} = ${sum};`)
                }
           }
            
        }
    }


}

multyplyTable([`456`])