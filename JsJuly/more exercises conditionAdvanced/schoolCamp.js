function schoolCamp(input) {

    let season = input[0];
    let groupType = input[1];
    let studentsNumber = Number(input[2]);
    let nights = Number(input[3]);

    let sport = "";
    let price = 0;

    switch (season) {
        case "Winter": {
            switch (groupType) {
                case "boys":
                case "girls":
                    price = (studentsNumber * nights) * 9.60; break;
                case 'mixed':
                    price = (studentsNumber * nights) * 10
            }
        } break;
        case "Spring": {
            switch (groupType) {
                case 'boys':
                case 'girls':
                    price = (studentsNumber * nights) * 7.20; break;
                case 'mixed':
                    price = (studentsNumber * nights) * 9.50
            }
        } break;
        case "Summer": {
            switch (groupType) {
                case 'boys':
                case 'girls':
                    price = (studentsNumber * nights) * 15; break;
                case 'mixed':
                    price = (studentsNumber * nights) * 20
            }
        } break;
    }
    if (season === 'Winter' && groupType === "girls"){
        sport = "Gymnastics";
    }else if (season === 'Winter' && groupType === "boys"){
        sport = "Judo";
    }else if (season === 'Winter' && groupType === 'mixed'){
        sport = "Ski"
    }else if (season === 'Spring' && groupType === 'girls'){
        sport = 'Athletics';
    }else if (season === 'Spring' && groupType === 'boys'){
        sport = 'Tennis'
    }else if (season === 'Spring' && groupType === 'mixed'){
        sport = "Cycling";
    }else if (season === 'Summer' && groupType === "girls"){
        sport = 'Volleyball'
    }else if (season === 'Summer' && groupType === "boys"){
        sport = 'Football'
    }else if (season === 'Summer' && groupType === 'mixed'){
        sport = 'Swimming'
    }

    if (studentsNumber >= 50){
        price = price - price * 0.50;
    }else if (studentsNumber >= 20 && studentsNumber < 50){
        price = price - price *0.15
    }else if (studentsNumber >= 10 && studentsNumber < 20){
        price = price - price * 0.05
    }
   
   
    console.log(`${sport} ${price.toFixed(2)} lv.`)

}

schoolCamp(["Spring", "girls", "20", "7"])
schoolCamp(["Winter", "mixed", "9", "15"])
schoolCamp(["Summer", "boys", "60", "7"])
schoolCamp(["Spring", "mixed", "17", "14"])
