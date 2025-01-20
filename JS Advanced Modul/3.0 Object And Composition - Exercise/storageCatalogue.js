function solve(input){

const result = {};

for (const line of input) {
    let [product, productPrice] = line.split(` : `);
    productPrice = Number(productPrice);

    if (!result[product]){
        result[product] = productPrice
    }
}

const entries = Object.entries(result).sort((a, b) => a[0].localeCompare(b[0]));


const orders = [];

for (const element of entries) {
    const letter = element[0][0];

    if(!orders.includes(letter)){
        console.log(letter);
        orders.push(letter)
    }
    console.log(`${element[0]}: ${element[1]}`);
    
   
}

}


solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
    )