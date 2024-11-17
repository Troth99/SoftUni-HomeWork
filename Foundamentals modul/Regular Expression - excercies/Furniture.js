function furniture(arr) {
    let checkValid = />>(?<furniture_name>[A-Za-z]+)<<(?<price>\d+(\.\d+)?)\!(?<quantity>\d+)/

    let totalPrice = 0
    let boughtItems = []

   
    let command = arr.shift()

    while ( command !== `Purchase`){
            

        let exec = checkValid.exec(command)
        if (exec){
         let furnitureName = exec.groups.furniture_name
        let price = Number(exec.groups.price)
        let quantity = Number(exec.groups.quantity)
        boughtItems.push(furnitureName)
        totalPrice += price * quantity

        }
    

        command = arr.shift()
    }



    console.log(`Bought furniture:`);

    for (let items of boughtItems) {
        console.log(items);
    }
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);

}

furniture(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase']
    
    

)