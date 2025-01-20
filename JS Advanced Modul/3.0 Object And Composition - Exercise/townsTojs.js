function solve(input){

const towns = [];

input.shift()
for (const element of input) {
    let [empty , town, latitude , longitude] = element.split(/\s*\|\s*/).map(el => el.trim());
    latitude = Number(latitude);
    longitude = Number(longitude)
    const obj = {
        Town: town,
        Latitude: +latitude.toFixed(2),
        Longitude: +longitude.toFixed(2),
    }

towns.push(obj)


}

console.log(JSON.stringify(towns));


}
solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
    )