function multiplyTable(input){

    
    let num = Number(input[0])
  


    for (let i = 1; i <= 10; i++){
        

        let result = i * num
        console.log(`${i} * ${num} = ${result}`)
    }



}

multiplyTable("9")