function solve(year, month, day){


let dayOfDate = new Date(year,(month-1) , day)
let str = ``
if (day >= 30){
    let dayUnder31 = 1
    mm = month + 1
    dayOfDate = new Date(year ,month , day)
    str += `${year}-${mm}-${dayUnder31}`
}else if (day >= 31){
    let dayNextMonth = 1
    mm = month + 1
    dayOfDate = new Date(year ,month , day)
    str += `${year}-${mm}-${dayNextMonth}`
}

if (day < 30){
 
   let dayUnder31 = day + 1

    dayOfDate = new Date(year ,month , day)
    str += `${year}-${month}-${dayUnder31}`

}
if ( year <= 1901){
    str = ``
    let yearFrom1 = 1901
    let dayUnder31 = day + 1
    str += `${yearFrom1}-${month}-${dayUnder31}`
}


console.log(str);
}


solve(2020, 3, 24)