function storeProvision(currentStock, orderedStock) {
    let store = {};  


    for (let i = 0; i < currentStock.length; i += 2) {
        let product = currentStock[i];
        let quantity = Number(currentStock[i + 1]);  
        store[product] = quantity; 
    }


    for (let i = 0; i < orderedStock.length; i += 2) {
        let product = orderedStock[i];
        let quantity = Number(orderedStock[i + 1]);  

        if (product in store) {
            store[product] += quantity;  
        } else {
            store[product] = quantity; 
        }
    }


    for (let product in store) {
        console.log(`${product} -> ${store[product]}`);
    }
}



storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    )