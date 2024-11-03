function travelTime(arr){

    let destinations = {}

    for (let cmdInfo of arr){

        let [country, town, quantity] = cmdInfo.split(` > `)
        quantity = Number(quantity)


        if (!destinations[country]){
            destinations[country] = {}
        }

        if (!destinations[country][town] || destinations[country][town] > quantity){
            destinations[country][town] = quantity
        }
    
      
 }

let result = ``

let sorted = Object.entries(destinations).sort((a,b) => a[0].localeCompare(b[0]))

for (let city of sorted){

    result = `${city[0]} -> `
    let citiesAndPrices = city[1]
    let sortedByprice = Object.entries(citiesAndPrices).sort((a,b) => a[1] - b[1])
    
    for (let [town, price] of sortedByprice){

        result += `${town} -> ${price} `
      
        
    }
    
    console.log(result);
}



}

travelTime([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
    ]
    
    )