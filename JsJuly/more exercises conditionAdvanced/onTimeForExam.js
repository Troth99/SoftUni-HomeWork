function onTimeForExam(input){

    let examHour = Number(input[0]);
    let examMinutes = Number(input[1]);
    let hourArrival = Number(input[2]);
    let minuteArrival = Number(input[3]);

        let examStart = examHour * 60 + examMinutes;
        let examArrival = hourArrival * 60 + minuteArrival;
        let difference = Math.abs(examStart - examArrival)

        let hours = Math.floor(difference /60);
        let minutes = (difference % 60);

        if (examArrival > examStart){
            console.log(`Late`)

            if (difference <60){
                console.log(`${minutes} minutes after the start`)
            }else {
                if (minutes<10){
                    console.log(`${hours}:0${minutes} hours after the start`);
                }else {
                    console.log(`${hours}:${minutes} hours after the start`);
                }
            }
        }else if (difference <= 30){
            console.log(`On time`)
            if(minutes > 0){
            console.log(`${minutes} minutes before the start`);
            }
        }else {
            console.log(`Early`);

            if(difference < 60){
                console.log(`${minutes} minutes before the start`);
            }else {
                if (minutes<10){
                    console.log(`${hours}:0${minutes} hours before the start`);
                }else {
                    console.log(`${hours}:${minutes} hours before the start`);
                }
            }
        }


}


onTimeForExam(["8", "00" , "8" , "00"])