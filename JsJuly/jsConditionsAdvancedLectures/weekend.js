function workingDay (input){

    let workingDay = input[0];

    switch (workingDay) {
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case "Thursday":
        case "Friday": 
        console.log('Working day');
         break;
         case "Saturday":
        case 'Sunday':
            console.log('Weekend');
            break;
    
        default:
            console.log('Error')
           
    }



}
workingDay(["Monday"])
workingDay(["April"])