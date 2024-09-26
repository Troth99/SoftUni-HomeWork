function solve(dayOfWeek){

let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
let day = ``
if (dayOfWeek >= 1 && dayOfWeek <= 7){

 day = days[dayOfWeek - 1]
}else {
    console.log(`Invalid day!`);
    
}

console.log(day);

}


solve(6)