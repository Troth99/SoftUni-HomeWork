function movieStars(input){
    let index =0
    let buget = Number(input[0]);
    index++

    let money = 0
    
    while (index < input.length){
        let currentActorName = input[index]
        index++

        if (currentActorName === `ACTION`){
            console.log(`We are left with ${buget.toFixed(2)} leva.`)
            break;
        }

        if (currentActorName.length > 15){
            buget -= buget *0.2
        }else {
            let paidMoney = Number(input[index]);
            index++
            buget -= paidMoney
        }
        if(buget < 0){
            console.log(`We need ${Math.abs(buget).toFixed(2)} leva for our actors.`);
            break;
            
        }

    } 


}

movieStars(['1000' , `John Cena`, "800" , "Freddy Kim" , "3000" , "ACTION"])
    