function hospital(input){

    let index = 0;
    let period = Number(input[index]);
    index++

    let treatenedPatients = 0;
    let untreatenedPatients = 0;

    let doctors = 7

    for (let i = 1; i <= period; i++){

        let patientsDay = Number(input[index])
        index++
        if (i % 3 === 0){
        if (treatenedPatients < untreatenedPatients){
            doctors++
        }
        }
        if (patientsDay <= doctors){
            treatenedPatients += patientsDay
        }else {
            treatenedPatients += doctors
            untreatenedPatients += patientsDay - doctors
        }
    }
    console.log(`Treated patients: ${treatenedPatients}.`)
    console.log(`Untreated patients: ${untreatenedPatients}.`);


}
hospital([`4`, `7`, `27`, `9` ,`1`])