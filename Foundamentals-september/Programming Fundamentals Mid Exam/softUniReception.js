function reception(employs){


    let totalHours = 0

    let employ1 = +employs[0];
    let employ2 = +employs[1];
    let employ3 = +employs[2]

   
    let sudentsCount = +employs.pop()
    let totalStundesPerHour = 0
    

    while( sudentsCount > 0){

        if (sudentsCount === 0){
            break;
        }
        totalHours++

        if (totalHours % 4 === 0){

            continue
        }
        totalStundesPerHour = employ1 + employ2 + employ3

        let saved = sudentsCount - totalStundesPerHour

        sudentsCount = saved



    }

    console.log(`Time needed: ${totalHours}h.`);
    
   

}


//reception(['5','6','4','20'])

reception(['3','2','5','40'])

//reception(['1','2','3','45'])