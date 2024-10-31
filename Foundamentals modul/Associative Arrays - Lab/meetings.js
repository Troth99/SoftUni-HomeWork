function meetings(arr){

let meetings = {}

for (let element of arr){
    let meetingInfo = element.split(` `)
    let [day, name] = meetingInfo

    

    if (meetings.hasOwnProperty(day)){
        console.log(`Conflict on ${day}!`);
        continue;
    }

    meetings[day] = name
    console.log(`Scheduled for ${day}`);
    
    
}

for (let schedules in meetings){

    console.log(`${schedules} -> ${meetings[schedules]}`);
    
}


}


meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
   )