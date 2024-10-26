function solve(arr){

    let parsed = JSON.parse(arr)

    let allKeys = Object.keys(parsed)

for (let key of allKeys){
    let currentOne = parsed[key]
    console.log(`${key}: ${currentOne}`);
    
}


}

solve('{"name": "George", "age": 40, "town": "Sofia"}')