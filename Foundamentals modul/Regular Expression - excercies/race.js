function race(arr){

let participations = arr.shift().split(`, `)

let command = arr.shift()

let stored = {}

for (let player of participations){

    stored[player] = 0
}
while(command !== `end of race`){

    let regName = /(?<name>[A-Za-z]+)/g
    let regNumbers = /(?<numbers>[0-9])+/g
    let matchNames = command.match(regName).join(``)
    let matchNumbers =command.match(regNumbers).join(``)
 
let result = 0
for (let number of matchNumbers){

    number = Number(number)
    result += number
}

if (stored.hasOwnProperty(matchNames)){
    stored[matchNames] += result
}



result = 0
command = arr.shift()
}


let sortedEntries = Object.entries(stored).sort((a,b) => b[1] - a[1])

console.log(`1st place: ${sortedEntries[0][0]}`);
console.log(`2nd place: ${sortedEntries[1][0]}`);
console.log(`3rd place: ${sortedEntries[2][0]}`);


}

race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
    'Mi*&^%$ch123o!#$%#nne787) ',
    '%$$B(*&&)i89ll)*&) ',
    'R**(on%^&ald992) ',
    'T(*^^%immy77) ',
    'Ma10**$#g0g0g0i0e',
    'end of race']
    
    )