function highJump(input){

    let index = 0
    let tihomirAim = Number(input[index++])

    let failedAttempts = 0
    let totalJump = 0

    let start = tihomirAim - 30
  
        while (start <= tihomirAim){

            let currentJump = Number(input[index++])
            
            totalJump++
            if (start < currentJump){
                start += 5
                failedAttempts = 0
            }else {
                failedAttempts++
            }
            
            if (failedAttempts === 3){
                break;
            }

        
        }

        if (failedAttempts === 3){
            console.log(`Tihomir failed at ${start}cm after ${totalJump} jumps.`);
            
        }else {
            console.log(`Tihomir succeeded, he jumped over ${tihomirAim}cm after ${totalJump} jumps.`);
        }
            
}



highJump(["250",
    "225",
    "224",
    "225",
    "228",
    "231",
    "235",
    "234",
    "235"])
    