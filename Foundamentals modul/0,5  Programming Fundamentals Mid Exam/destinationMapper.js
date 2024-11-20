function destinationMapper(string){

let patternt = /([=\/])(?<destination>[A-Z][A-Za-z]{2,})\1/g
let matched = string.matchAll(patternt)

let sumPoints = 0
let destinations = []
if (matched){

    for (let match of matched){

        let destination = match.groups.destination

        destinations.push(destination)
        sumPoints += destination.length
        
    }

}

console.log(`Destinations: ${destinations.join(`, `)}`);
console.log(`Travel Points: ${sumPoints}`);

}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")