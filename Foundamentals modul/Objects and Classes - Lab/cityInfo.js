function solve(cityObject){

    let allKeys = Object.keys(cityObject)

    for (let key of allKeys){
        let currentObj = cityObject[key]

        console.log(`${key} -> ${currentObj}`);
        
    }


}
 solve({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
}
)