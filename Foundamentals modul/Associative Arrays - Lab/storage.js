function storate(arr){

    let storage = new Map()

    for (let element of arr){

        let [product, quantity] = element.split(` `)
        quantity = Number(quantity)

        if (!storage.has(product)){
            storage.set(product, quantity)
        }else {
            let currentQuantity = storage.get(product)
            let newQuantity = currentQuantity += quantity
            storage.set(product, newQuantity)
        }
    }
for (let elemets of storage){
    console.log(`${elemets[0]} -> ${elemets[1]}`);
    
}


}

storate(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
)