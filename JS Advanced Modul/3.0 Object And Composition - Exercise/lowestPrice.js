function solve(input){

   const result = {};

   for (const element of input) {
        let [name, product, price] = element.split(` | `)
        price = Number(price)

        if( result[product] === undefined){
            result[product] = {}

        }

        result[product][name] = price
   }

   for (const [product, names] of Object.entries(result)) {
        const sorted = Object.entries(names).sort(
            (a,b) => a[1] - b[1]
        )
        const [name, price] = sorted[0];

        console.log(`${product} -> ${price} (${name})`)
   }

  
}

solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
    )