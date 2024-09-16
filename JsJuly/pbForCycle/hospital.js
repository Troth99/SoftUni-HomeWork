function hospital(input){

    let index = 0;
    let days = input[index];
    index++

    let totalThreatedPatients = 0;
    let totalUnthreatedPatients = 0;
    
    let doctors = 7;
    for (let i = 1; i <= days; i++){
        let currentPatients = Number(input[i])
        
        if(i % 3 === 0){
            if (totalUnthreatedPatients > totalThreatedPatients){
                doctors++
            }
        }
        

        if (currentPatients <= doctors){

            totalThreatedPatients += currentPatients;
         
        }else {
            totalThreatedPatients += doctors
            totalUnthreatedPatients += currentPatients - doctors
        }
    }
    console.log(`Treated patients: ${totalThreatedPatients}.`)
    console.log(`Untreated patients: ${totalUnthreatedPatients}.`)
}
hospital(["4 " ,"7" , "27" ,"9" ,"1"])
