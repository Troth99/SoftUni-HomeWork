function matchDates(arr){

    let patternt = /(?<day>\d{2})([.\-\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})/g

    let string = arr[0]


    let matches = Array.from(string.matchAll(patternt))

    for (let info of matches){

        console.log(`Day: ${info.groups.day}, Month: ${info.groups.month}, Year: ${info.groups.year}`);
        
    }
    


}

matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016'])