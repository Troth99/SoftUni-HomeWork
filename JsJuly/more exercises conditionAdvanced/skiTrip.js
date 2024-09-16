function skiTrip(input) {

    let dayStay = Number(input[0])-1;
    let room = input[1];
    let rate = input[2];

    let roomPrice = 0;

    
    
    
    switch (room) {
        case 'room for one person': roomPrice= 18.00; break;
        
        case 'apartment': roomPrice= 25.00; 
            if (dayStay < 10) {
                roomPrice = roomPrice - roomPrice* 0.30
            }else if (dayStay >= 10 && dayStay <= 15){
                roomPrice= roomPrice - roomPrice * 0.35;
            }else if (dayStay> 15){
                roomPrice= roomPrice - roomPrice * 0.50;
            }
            break;
        case 'president apartment' : roomPrice = 35.00;
        if (dayStay <10){
            roomPrice = roomPrice-roomPrice * 0.1;
        }else if ( dayStay >= 10 && dayStay <= 15){
            roomPrice = roomPrice - roomPrice * 0.15;
        }else if (dayStay > 15){
            roomPrice = roomPrice - roomPrice * 0.20;
        }
    }
    
    let totalSum = roomPrice * dayStay

   switch (rate){
    case 'positive' : totalSum = totalSum + (totalSum*0.25); break;
    case 'negative' : totalSum = totalSum - (totalSum* 0.1); break;

   }
    console.log(totalSum.toFixed(2));

}
skiTrip(["14", "apartment", "positive"])
skiTrip(["30", "president apartment", "negative"])