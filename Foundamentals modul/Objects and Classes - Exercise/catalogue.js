function catalogue(arr){

    let products = []

    for (let cmd of arr){

        let productsInfo = cmd.split(` : `)
        let productName = productsInfo[0]
        let productPrice = Number(productsInfo[1])

        let obj = {
            product: productName,
            productPrice: productPrice
        }

        products.push(obj)
        
        
    }

    let sorted = products.sort((first, second) => first.product.localeCompare(second.product))
    products = sorted
    let checkTheWord = []
    for (let productions of products){
        
        let productName = productions.product
        let productPrice = productions.productPrice

        if (!checkTheWord.includes(productName[0])){
            console.log(`${productName[0]}`);
            checkTheWord.push(productName[0])
            
        }
        console.log(`  ${productName}: ${productPrice}`);
    }




}


catalogue([
    'Omlet : 5.4',
    'Shirt : 15',
    'Cake : 59'
    ]
     
    )