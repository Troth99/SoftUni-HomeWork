function daysInMonth(month, year){
let day = new Date(year, month, 0).getDate()
return day
}

console.log(daysInMonth(2, 2021))